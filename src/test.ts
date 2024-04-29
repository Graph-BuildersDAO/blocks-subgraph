import {
  ConverterAddition as ConverterAdditionEvent,
  ConverterRemoval as ConverterRemovalEvent,
  OwnerUpdate as OwnerUpdateEvent
} from "../generated/test/test"
import {
  ConverterAddition,
  ConverterRemoval,
  OwnerUpdate
} from "../generated/schema"

export function handleConverterAddition(event: ConverterAdditionEvent): void {
  let entity = new ConverterAddition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._token = event.params._token
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConverterRemoval(event: ConverterRemovalEvent): void {
  let entity = new ConverterRemoval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._token = event.params._token
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdate(event: OwnerUpdateEvent): void {
  let entity = new OwnerUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._prevOwner = event.params._prevOwner
  entity._newOwner = event.params._newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
