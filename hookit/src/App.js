import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      values: []
    }
  }

  componentDidMount() {

    axios.all([
      axios.get("/hookit.homework/Posts.json"),
      axios.get("/hookit.homework/PostValues.json")
    ])
    .then(axios.spread((res1, res2) => {
      console.log(res1.data)
      console.log(res2.data)
      this.setState({
        posts: res1.data,
        values: res2.data
      })
    }))
    .catch(error => {
      console.log(error)
    });
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default App;
