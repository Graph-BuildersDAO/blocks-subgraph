const util = require("util");
const exec = util.promisify(require("child_process").exec);
import 'dotenv/config'

const executeCommand = async (command) => {
  try {
    const { stdout, stderr } = await exec(command);
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log("stdout:", stdout);
  } catch (e) {
    // should contain code (exit code) and signal (that caused the termination).
    console.error(`exec error: ${e}`);
  }
};

export const addNetwork = async (network) => {
    await executeCommand(
      `cross-env mkdir protocols/deployments/erc721-${network}`,
    );
    await executeCommand(
      `cross-env touch protocols/deployments/erc721-${network}/configurations.json`,
    );
    await executeCommand(
      `cross-env echo "{\\"graftEnabled\\": false, \\"subgraphId\\": \\"\\", \\"graftStartBlock\\": \\"\\", \\"network\\": \\"${network}\\", \\"startBlock\\": 0 }" > protocols/deployments/erc721-${network}/configurations.json`,
    )
}