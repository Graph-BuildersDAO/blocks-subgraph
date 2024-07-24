

const util = require('util')
const path = require('path');
const exec = util.promisify(require('child_process').exec)
import {networks} from "./networks";
import * as dotenv from "dotenv";
dotenv.config();

const executeCommand = async (command) => {
  try {
    const { stdout, stderr } = await exec(command)
    if (stderr) {
      console.log(`stderr: ${stderr}`)
    }
    console.log('stdout:', stdout)
  } catch (e) {
    // should contain code (exit code) and signal (that caused the termination).
    console.error(`exec error: ${e}`)
  }
}

const executeComanndErrorReturn = async (command) => {
  try {
    const { stdout, stderr } = await exec(command)
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return stderr;
    }
    console.log('stdout:', stdout)
  } catch (e) {
    // should contain code (exit code) and signal (that caused the termination).
    console.error(`exec error: ${e}`)
  }
}

const executeStudioDeployWithVersionIncrement = async (subgraphName, version) => {
  let [major, minor, patch] = version
      .split('.')
  const cmd = `yarn deploy-studio ${subgraphName} -l=${major}.${minor}.${ parseInt(patch)}`
  let stderr =  await executeComanndErrorReturn(cmd)
  if(stderr){
    if(stderr.includes("Version label already exists")){
      console.log(`Stuido version for ${subgraphName} exists - attempting deploy with version - ${major}.${minor}.${parseInt(patch)+1}`)
      return executeStudioDeployWithVersionIncrement(subgraphName, `${major}.${minor}.${parseInt(patch)+1}`)
    }
  }
}

const checkStudioAccessToken = () => {
  if (!process.env.SUBGRAPH_STUDIO_DEPLOY_KEY) {
    throw new Error(
      `
      Missing access token in SUBGRAPH_STUDIO_DEPLOY_KEY env.
      You can get a token from https://thegraph.com/studio/
      `
    )
  }
}

  export const codegen = async () => {
    console.log('\n Running codegen...')
    await executeCommand('graph codegen')
  }
  
  // Creating subgraphs is only available from hosted-service dashboard
  // yarn graph create $network_name-v2 --node https://api.thegraph.com/deploy/ --access-token $SUBGRAPH_DEPLOY_KEY"
  export const build = async (network) => {
    console.log(`Building subgraph for ${network}`)
    console.log(`\n Copying constants & templates for ${network} \n`)
    console.log(`\n Generating manifest for ${network} \n`)
    await executeCommand(`cross-env mustache networks/${network}.json subgraph.template.yaml > subgraph.yaml`)
    await codegen()
  }

/**
 * Deploys subgraph with studio
 * @param version
 * @param subgraphName
 * @returns
 */
export const deployStudio = async (version, subgraphName) => {
  checkStudioAccessToken()
  await executeCommand(
    `graph auth --studio ${process.env.SUBGRAPH_STUDIO_DEPLOY_KEY}`
  )
  
  return executeStudioDeployWithVersionIncrement(subgraphName,version)
}

/**
 * deploy command
 * @param network 
 * @param studioName 
 * @param graphLabel 
 * @returns 
 */
export const deploy = async (network, studioName, graphLabel) => {
  if (!network) {
    throw new Error('Missing network name')
  }

  if (!networks[network].studioEndpoint) {
    throw new Error(`Missing subgraph configuration for ${network}`)
  }
  
  const studioEndpoint = networks[network].studioEndpoint;
  const nextVersion = networks[network].nextVersion;

  if(studioName && graphLabel){
    return deployStudio(graphLabel, studioName)
  }

  if(studioEndpoint && graphLabel){
    return deployStudio(graphLabel, studioEndpoint)
  }

  if(studioEndpoint){
    if(nextVersion !== ""){
      return deployStudio(nextVersion, studioEndpoint)
    }else {
      return deployStudio('v0.0.1', studioEndpoint)
    }
  }

  throw new Error(
    `Invalid subgraph configuration for ${network} (${networks[network].studioEndpoint}) `
  )
}

/**
 * deploy only studio command
 * @param network 
 * @param graphLabel 
 * @returns 
 */
export const deployOnlyStudio = async (network, graphLabel) => {
  if (!network) {
    throw new Error('Missing network name')
  }

  if (!networks[network]?.studioEndpoint) {
    console.log(`Missing subgraph studioEndpoint for ${network}`)
    return;
  }

  const studioEndpoint = networks[network].studioEndpoint;

  if(studioEndpoint && graphLabel){
    return deployStudio(graphLabel, studioEndpoint)
  }

  throw new Error(
    `Invalid subgraph configuration for ${network} (${networks[network].studioEndpoint})`
  )
}



