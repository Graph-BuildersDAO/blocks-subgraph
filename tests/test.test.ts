import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ConverterAddition } from "../generated/schema"
import { ConverterAddition as ConverterAdditionEvent } from "../generated/test/test"
import { handleConverterAddition } from "../src/test"
import { createConverterAdditionEvent } from "./test-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _address = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newConverterAdditionEvent = createConverterAdditionEvent(
      _token,
      _address
    )
    handleConverterAddition(newConverterAdditionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ConverterAddition created and stored", () => {
    assert.entityCount("ConverterAddition", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ConverterAddition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ConverterAddition",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_address",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
