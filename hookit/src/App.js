import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      posts: []
    }
  }

  componentDidMount() {

    axios.get("/hookit.homework/Posts.json").then(
      (res) => {
        console.log(res.data);
        this.setState({
          posts: res.data
        })
      }
    ).catch((err) => {
      console.log(err);
    })
}

  render() {
    return (
      <div></div>
    )
  }
}

export default App;
