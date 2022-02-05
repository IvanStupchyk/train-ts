import React from "react";
import Main from "../components/Main";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../state/redux-store";
import {initialStateType, removeItemTC} from "../state/mainReducer";

const MainContainer = React.memo(() => {
  const {
    time,
    amountTaps,
    items,
  } = useSelector<AppRootState, initialStateType>(state => state.mainReducer);

  const dispatch = useDispatch();

  const removeItem = React.useCallback((id: number) => {
    return () => {
      dispatch(removeItemTC(id));
    };
  }, []);

  return (
    <Main
      time={time}
      amountTaps={amountTaps}
      items={items}
      removeItem={removeItem}
    />
  )
});

export default MainContainer;