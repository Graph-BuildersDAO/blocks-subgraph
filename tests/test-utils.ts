import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  ConverterAddition,
  ConverterRemoval,
  OwnerUpdate
} from "../generated/test/test"

export function createConverterAdditionEvent(
  _token: Address,
  _address: Address
): ConverterAddition {
  let converterAdditionEvent = changetype<ConverterAddition>(newMockEvent())

  converterAdditionEvent.parameters = new Array()

  converterAdditionEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  converterAdditionEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return converterAdditionEvent
}

export function createConverterRemovalEvent(
  _token: Address,
  _address: Address
): ConverterRemoval {
  let converterRemovalEvent = changetype<ConverterRemoval>(newMockEvent())

  converterRemovalEvent.parameters = new Array()

  converterRemovalEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  converterRemovalEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return converterRemovalEvent
}

export function createOwnerUpdateEvent(
  _prevOwner: Address,
  _newOwner: Address
): OwnerUpdate {
  let ownerUpdateEvent = changetype<OwnerUpdate>(newMockEvent())

  ownerUpdateEvent.parameters = new Array()

  ownerUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_prevOwner",
      ethereum.Value.fromAddress(_prevOwner)
    )
  )
  ownerUpdateEvent.parameters.push(
    new ethereum.EventParam("_newOwner", ethereum.Value.fromAddress(_newOwner))
  )

  return ownerUpdateEvent
}
