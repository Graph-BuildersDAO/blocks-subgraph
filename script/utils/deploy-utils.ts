const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);
import { networks } from "./networks";
import * as dotenv from "dotenv";
dotenv.config();

const executeCommand = async (command: string) => {
  try {
    const { stdout, stderr } = await exec(command,  { maxBuffer: 1024 * 1024 * 10 });
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log('stdout:', stdout);
  } catch (e) {
    console.error(`exec error: ${e}`);
  }
};

const executeComanndErrorReturn = async (command: string): Promise<string | undefined> => {
  try {
    const { stdout, stderr } = await exec(command,  { maxBuffer: 1024 * 1024 * 10 });
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return stderr;
    }
    console.log('stdout:', stdout);
  } catch (e) {
    console.error(`exec error: ${e}`);
  }
};

const executeStudioDeployWithVersionIncrement = async (subgraphName: string, version: string) => {
  console.log(`Deploying ${subgraphName} with version ${version}`);
  const [major, minor, patch] = version.split('.').map(Number);

  const deployCommand = `
    graph deploy ${subgraphName} --studio --version-label ${major}.${minor}.${patch+1}
  `;

  console.log("Deploy command:", deployCommand);
  await executeCommand(deployCommand);

  let stderr = await executeComanndErrorReturn(deployCommand);
  if (stderr) {
    if (stderr.includes("Version label already exists")) {
      console.log(`Version ${major}.${minor}.${patch} exists. Retrying with incremented patch...`);
      const newVersion = `${major}.${minor}.${patch + 1}`;
      return executeStudioDeployWithVersionIncrement(subgraphName, newVersion);
    } else {
      console.error("Deployment failed:", stderr);
      throw new Error(stderr);
    }
  }

  console.log(`Successfully deployed ${subgraphName} with version ${version}`);
};

const checkStudioAccessToken = () => {
  if (!process.env.SUBGRAPH_STUDIO_DEPLOY_KEY) {
    throw new Error(
      `
      Missing access token in SUBGRAPH_STUDIO_DEPLOY_KEY env.
      You can get a token from https://thegraph.com/studio/
      `
    );
  }
};

export const codegen = async () => {
  console.log('\nRunning codegen...');
  await executeCommand('graph codegen');
  await executeCommand('graph build');
};

export const build = async (network: string) => {
  console.log(`Building subgraph for ${network}`);
  console.log(`\nCopying constants & templates for ${network}\n`);
  console.log(`\nGenerating manifest for ${network}\n`);
  await checkStudioAccessToken();
  console.log(process.env.SUBGRAPH_STUDIO_DEPLOY_KEY!);
  await executeCommand(`cross-env mustache networks/${network}.json subgraph.template.yaml > subgraph.yaml`);
  await codegen();
  console.log('Done building subgraph');
};

export const deployStudio = async (version: string, subgraphName: string) => {
  const authkey = process.env.SUBGRAPH_STUDIO_DEPLOY_KEY!;
  console.log(authkey, 'authkey');
  // await executeCommand(`graph auth ${process.env.SUBGRAPH_STUDIO_DEPLOY_KEY!}`);
  console.log("Done with auth");
  return executeStudioDeployWithVersionIncrement(subgraphName, version);
};

export const deploy = async (network: string, studioName?: string, graphLabel?: string) => {
  if (!network) throw new Error("Missing network name");

  const { studioEndpoint, nextVersion } = networks[network];
  if (!studioEndpoint) throw new Error(`Missing studio endpoint for ${network}`);
 console.log('we need the auth  ', process.env.SUBGRAPH_STUDIO_DEPLOY_KEY!)

 const pk = process.env.SUBGRAPH_STUDIO_DEPLOY_KEY!
 const authCmd = `graph auth ${pk}`
 await executeCommand(`cross-env mustache networks/${network}.json subgraph.template.yaml > subgraph.yaml`);

 await executeCommand(authCmd)
  console.log(`Authenticated successfully for ${network}`);

  const version = nextVersion || "0.0.1";
  const subgraphName = studioName || studioEndpoint;
  console.log(`Deploying ${subgraphName} to studio with version ${version}`);

  return deployStudio(version, subgraphName);
};

export const deployOnlyStudio = async (network: string, graphLabel: string) => {
  if (!network) {
    throw new Error('Missing network name');
  }

  if (!networks[network]?.studioEndpoint) {
    console.log(`Missing subgraph studioEndpoint for ${network}`);
    return;
  }

  const studioEndpoint = networks[network].studioEndpoint;

  if (studioEndpoint && graphLabel) {
    return deployStudio(graphLabel, studioEndpoint);
  }

  throw new Error(
    `Invalid subgraph configuration for ${network} (${networks[network].studioEndpoint})`
  );
};
