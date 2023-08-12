import {
  Join as JoinEvent,
  Move as MoveEvent,
  NewGame as NewGameEvent,
  Start as StartEvent,
  Win as WinEvent,
  Contract as KalahaContract,
} from "../generated/Contract/Contract";
import { Game } from "../generated/schema";

export function handleJoin(event: JoinEvent): void {
  let entity = Game.load(event.params._game.toString());
  if (entity == null) return;

  entity.player2 = event.params._by.toHexString();
  entity.save();
}

// export function handleMove(event: MoveEvent): void {
//   let entity = new Move(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   );
//   entity._game = event.params._game;
//   entity.x = event.params.x;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

export function handleNewGame(event: NewGameEvent): void {
  let entity = new Game(event.params._game.toString());
  entity.gameID = event.params._game;
  entity.player1 = event.params._by.toHexString();

  let kalahaContract = KalahaContract.bind(event.address);
  let state = kalahaContract.state(event.params._game);
  entity.player2 = state.value0[1].toHexString();
  entity.board = state.value1;
  entity.nonce = state.value2;
  entity.winner = state.value3.toHexString();

  entity.save();
}

// export function handleStart(event: StartEvent): void {
//   let entity = new Start(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity._game = event.params._game
//   entity._by = event.params._by

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleWin(event: WinEvent): void {
//   let entity = new Win(event.transaction.hash.concatI32(event.logIndex.toI32()))
//   entity._game = event.params._game
//   entity._winner = event.params._winner
//   entity._by = event.params._by

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
