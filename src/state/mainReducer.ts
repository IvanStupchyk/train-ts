import {Dispatch} from "react";

const initialState: initialStateType = {
  time: '20.20.12',
  amountTaps: 22,
  items: [
    {id: 1, name: 'Kettle', amount: 2},
    {id: 2, name: 'Plate', amount: 7},
    {id: 3, name: 'Spoon', amount: 1},
  ]
}


export const mainReducer = (state: initialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ADD-ITEM":
      return {
        ...state,
        items: [...state.items, {name: action.payload.name, amount: action.payload.amount, id: state.items.length + 1}]
      };

    case "REMOVE-ITEM":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export const removeItemAC = (id: number): RemoveItemType => {
  return {type: 'REMOVE-ITEM', payload: {id}}
}

export const removeItemTC = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(removeItemAC(id));
  };
};

export type RemoveItemType = {
  type: 'REMOVE-ITEM',
  payload: {id: number}
}

export type AddItemType = {
  type: 'ADD-ITEM',
  payload: {name: string, amount: number}
}

type ActionsType = RemoveItemType | AddItemType

interface initialStateTypeInit {
  time: string
  amountTaps: number
  items: Array<itemType>
  wannaExclude: string
}

// export type initialStateType = Omit<initialStateTypeInit, "wannaExclude">

export type initialStateType = Pick<initialStateTypeInit, "time" | "amountTaps" | "items">
console.log(initialState)
// export interface initialStateType {
//   time: string
//   amountTaps: number
//   items: Array<itemType>
// }

export type itemType = {
  id: number
  name: string
  amount: number
}