import React, { Component } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Video from "./components/Video/Video";
import { Provider } from "react-redux";
import store from "./store/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
