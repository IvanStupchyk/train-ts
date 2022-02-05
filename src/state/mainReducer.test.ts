import {initialStateType, mainReducer, removeItemAC} from "./mainReducer";

export let startReducer: initialStateType

beforeEach(() => {
  startReducer = {
    time: '20.20.12',
    amountTaps: 22,
    items: [
      {id: 1, name: 'Kettle', amount: 2},
      {id: 2, name: 'Plate', amount: 7},
      {id: 3, name: 'Spoon', amount: 1},
    ]
  }
})
test('task should be deleted', () => {
  const modifiedReducer = mainReducer(startReducer, removeItemAC(1))

  expect(modifiedReducer.items.length).toBe(2)
  expect(modifiedReducer.items[0]).toStrictEqual({id: 2, name: 'Plate', amount: 7})
})