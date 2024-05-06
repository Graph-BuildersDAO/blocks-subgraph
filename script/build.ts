const util = require('util')
const exec = util.promisify(require('child_process').exec)
import { build} from "./utils/deploy-utils";



async function main() {
  const network = process.argv[2]
  if (!network) {
    console.error('no network parameter passed')
    process.exit(-1)
  }
  await build(network)
}

main()