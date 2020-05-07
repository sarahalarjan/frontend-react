import React, { Component } from 'react';
import Header from './components/WhiteHeader/header'
import RedCard from './components/RedCard/redCard'
import WhiteCrad from './components/WhiteCard/whiteCard'
import BlackCard from './components/BlackCard/blackCard'
import axios from "axios";

import './App.css'
class App extends Component {

  state = {
    songs: [],
  }
  componentDidMount() {
    //this.getSongs();
  }
  getSongs = async () => {
    let res = await axios.get("http://localhost:8080/api/songs");

    //  let { data } = res.data;
    console.log(res.data)
    this.setState({ songs: res.data.songs });
  };
  render() {
    return (
      <div>
        <Header />
        <RedCard/>
        <WhiteCrad/>
       
       <BlackCard/>
      </div>
    );
  }
}

export default App;