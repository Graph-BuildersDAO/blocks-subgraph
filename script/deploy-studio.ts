const util = require('util')
const exec = util.promisify(require('child_process').exec)
import {networks} from "./utils/networks";
import {deployOnlyStudio, build} from "./utils/deploy-utils";


const choices = Object.keys(networks);


async function  main() {
  let studioChoices = choices.filter((c) => networks[c].studioEndpoint != null);
  // check config
  console.log(
    `Deploying subgraphs to studio for:\n${studioChoices.map((c) => ` - ${c}\n`).join('')}`
  )
  // build and deploy each network
  for (const network of studioChoices) {
    await build(network)
    await deployOnlyStudio(network, networks[network].nextVersion)
  }

  console.log('Subgraph studio deployments done.')
}
  
main()