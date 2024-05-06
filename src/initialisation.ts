import { ethereum } from "@graphprotocol/graph-ts";

import { createGlobalAndFirstBlock } from "./entities/global";

export function initialisation(block: ethereum.Block): void {
  createGlobalAndFirstBlock(block);
}
