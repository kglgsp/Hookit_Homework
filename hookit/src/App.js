import React from 'react';
import './App.css';
import axios from 'axios';
import DataTable from './components/table.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      values: [],
    }
  }

  async componentDidMount() {

    axios.all([
      axios.get("/hookit.homework/Posts.json"),
      axios.get("/hookit.homework/PostValues.json")
    ])
    .then(axios.spread((res1, res2) => {
      this.setState({
        posts: res1.data,
        values: res2.data
      })
    }))
    .catch(error => {
      //console.log(error)
    });
  }

  joinSocialPost_ID(posts, values) {
    for (let i in posts){
      let parent = posts[i] 
      let filterList = values.filter((value) => value.SocialPost_ID && value.SocialPost_ID === parent.SocialPost_ID)

      filterList.map((value,index,array) => {
        //update values and give new fields from parent
        for(let key in parent){
          value[key] = parent[key]
        }
      })
    }
    return values
  }




  render() {
    let table = this.joinSocialPost_ID(this.state.posts, this.state.values)
    return (
      <DataTable rows = {table} />
    )
  }
}

export default App;
