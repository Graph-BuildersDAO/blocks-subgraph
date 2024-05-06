import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts";

import { Global } from "../../generated/schema";
import { createBlock } from "./block";

const globalID = Bytes.fromI32(0);

export function createGlobalAndFirstBlock(block: ethereum.Block): void {
  const blockEntity = createBlock(block);
  let global = new Global(globalID);
  global.previousGasFee = BigInt.fromI32(0);
  global.gasFee = blockEntity.baseFeePerGas;
  global.block = blockEntity.id;
  global.save();
}

export function getGlobal(): Global {
  return Global.load(globalID)!;
}
