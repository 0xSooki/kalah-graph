import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { Join, Move, NewGame, Start, Win } from "../generated/Kalaha/Kalaha"

export function createJoinEvent(_game: BigInt, _by: Address): Join {
  let joinEvent = changetype<Join>(newMockEvent())

  joinEvent.parameters = new Array()

  joinEvent.parameters.push(
    new ethereum.EventParam("_game", ethereum.Value.fromUnsignedBigInt(_game))
  )
  joinEvent.parameters.push(
    new ethereum.EventParam("_by", ethereum.Value.fromAddress(_by))
  )

  return joinEvent
}

export function createMoveEvent(_game: BigInt, x: i32): Move {
  let moveEvent = changetype<Move>(newMockEvent())

  moveEvent.parameters = new Array()

  moveEvent.parameters.push(
    new ethereum.EventParam("_game", ethereum.Value.fromUnsignedBigInt(_game))
  )
  moveEvent.parameters.push(
    new ethereum.EventParam(
      "x",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(x))
    )
  )

  return moveEvent
}

export function createNewGameEvent(_game: BigInt, _by: Address): NewGame {
  let newGameEvent = changetype<NewGame>(newMockEvent())

  newGameEvent.parameters = new Array()

  newGameEvent.parameters.push(
    new ethereum.EventParam("_game", ethereum.Value.fromUnsignedBigInt(_game))
  )
  newGameEvent.parameters.push(
    new ethereum.EventParam("_by", ethereum.Value.fromAddress(_by))
  )

  return newGameEvent
}

export function createStartEvent(_game: BigInt, _by: Address): Start {
  let startEvent = changetype<Start>(newMockEvent())

  startEvent.parameters = new Array()

  startEvent.parameters.push(
    new ethereum.EventParam("_game", ethereum.Value.fromUnsignedBigInt(_game))
  )
  startEvent.parameters.push(
    new ethereum.EventParam("_by", ethereum.Value.fromAddress(_by))
  )

  return startEvent
}

export function createWinEvent(
  _game: BigInt,
  _winner: Address,
  _by: Address
): Win {
  let winEvent = changetype<Win>(newMockEvent())

  winEvent.parameters = new Array()

  winEvent.parameters.push(
    new ethereum.EventParam("_game", ethereum.Value.fromUnsignedBigInt(_game))
  )
  winEvent.parameters.push(
    new ethereum.EventParam("_winner", ethereum.Value.fromAddress(_winner))
  )
  winEvent.parameters.push(
    new ethereum.EventParam("_by", ethereum.Value.fromAddress(_by))
  )

  return winEvent
}
