import React, { Component } from 'react';
import MusicCard from './components/musicCard'

import axios from "axios";
    class App extends Component {

      state = {
        songs: [],
       

      }
      componentDidMount() {
        this.getSongs();
      }
      getSongs = async () => {
        let res = await axios.get("http://localhost:8080/api/songs");
        
      //  let { data } = res.data;
        console.log(res.data)
        this.setState({ songs: res.data.songs });
    };
      render() {
        return (
          <MusicCard songs={this.state.songs} />
        );
      }
    }

    export default App;