import { ethereum } from "@graphprotocol/graph-ts";
import { createBlock } from "./entities/block";

export function handleBlock(block: ethereum.Block): void {
    createBlock(block);
}
