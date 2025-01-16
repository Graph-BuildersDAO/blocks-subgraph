const util = require('util')
const exec = util.promisify(require('child_process').exec)
import {networks} from "./utils/networks";
import {deploy, build} from "./utils/deploy-utils";


// const choices = Object.keys(networks);

async function main() {
  console.log('hi')
  // const network = process.argv[2]
  // if (!network) {
  //   console.error('no network parameter passed')
  //   process.exit(-1)
  // }
  // await build(network)
  // console.log(networks[network].studioEndpoint, 'endpoint')
  // await deploy(network, networks[network].studioEndpoint, networks[network].nextVersion)
}

main()