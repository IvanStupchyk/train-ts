import React from "react";
import {itemType} from "../state/mainReducer";
import './styles.css';

type MainPropsType = {
  time: string
  amountTaps: number
  items: Array<itemType>
  removeItem: (id: number) => () => void
}

const Main = React.memo((props: MainPropsType) => {
  const {
    time,
    amountTaps,
    items,
    removeItem,
  } = props;

  return (
    <div className="main__container">
      <p>{time}</p>
      <p>{amountTaps}</p>
      <p>From Nastya</p>
      <p>check one commit</p>
      <div className="main__container">
        {
          items.map(it => (
            <div key={it.id} className="main__item">
              <p style={{marginRight: '20px'}}>{it.name}</p>
              <span style={{marginRight: '10px'}}>amount: {it.amount}</span>
              <button onClick={removeItem(it.id)}>delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
});

export default Main;