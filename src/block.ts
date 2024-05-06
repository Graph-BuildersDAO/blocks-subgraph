import { ethereum } from "@graphprotocol/graph-ts";
import { getGlobal } from "./entities/global";
import { createBlock } from "./entities/block";

export function handleBlock(block: ethereum.Block): void {
  let global = getGlobal();
  const blockEntity = createBlock(block);

  global.block = blockEntity.id;
  global.previousGasFee = global.gasFee;
  global.gasFee = blockEntity.baseFeePerGas;
  global.save();
}
