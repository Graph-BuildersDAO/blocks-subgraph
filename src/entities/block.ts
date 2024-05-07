import { ethereum, BigInt } from "@graphprotocol/graph-ts";

import { Block } from "../../generated/schema";

export function createBlock(block: ethereum.Block): void {
  let id = block.hash;
  let blockEntity = new Block(id);
  blockEntity.number = block.number;
  blockEntity.timestamp = block.timestamp;
  blockEntity.parentHash = block.parentHash;
  blockEntity.author = block.author;
  blockEntity.difficulty = block.difficulty;
  blockEntity.totalDifficulty = block.totalDifficulty;
  blockEntity.gasUsed = block.gasUsed;
  blockEntity.gasLimit = block.gasLimit;
  blockEntity.receiptsRoot = block.receiptsRoot;
  blockEntity.transactionsRoot = block.transactionsRoot;
  blockEntity.stateRoot = block.stateRoot;
  let blockSize = block.size
  if(!blockSize){
    blockSize = BigInt.zero()
  }
  blockEntity.size = blockSize;
  blockEntity.baseFeePerGas = block.baseFeePerGas;
  blockEntity.unclesHash = block.unclesHash;
  blockEntity.save();
}
