import "./App.css";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";

import React, { Component } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      menus: [],
      categoryYangDipilih: "Banner"
    }
  }

  

  // componentDidMount() {
  //   axios.get(API_URL + "products?categories.nama=" + this.state.categoryYangDipilih)
  //   .then((res) => {
  //     // console.log("Response : ", res);
  //     const menus = res.data;
  //     this.setState({ menus });
  //   })
  //   .catch((error) => {
  //     console.log("Error yaa", error);
  //   })
  // }

  // changeCategory = (value) => {
  //   this.setState({
  //     categoryYangDipilih: value,
  //     menus: [],
  //   })
  //   axios.get(API_URL + "products?categories.nama="+value)
  //   .then((res) => {
  //     // console.log("Response : ", res);
  //     const menus = res.data;
  //     this.setState({ menus });
  //   })
  //   .catch((error) => {
  //     console.log("Error yaa", error);
  //   })
  // }









  render() {
   
    // const { menus, categoryYangDipilih } = this.state;
    return (
      <div>
      {/* <Navigation 
      changeCategory={this.changeCategory}
      categoryYangDipilih={this.categoryYangDipilih}
      /> */}
      <Maincontent />
      <Footer />
    </div>
    )
  }
}




