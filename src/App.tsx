import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from "./containers/MainContainer";
import {Provider} from "react-redux";
import {store} from "./state/redux-store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <h1>oh, I changed something</h1>
          <MainContainer/>
        </header>
      </Provider>
    </div>
  );
}

export default App;
