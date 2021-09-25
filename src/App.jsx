import React from "react";
import UserCard from "./components/UserCard";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.lang);
  }

  render() {
        return (
      <div className="App" id="123" asd="asd">
        <UserCard   />
      </div>
    );
  }
}

export default App;
