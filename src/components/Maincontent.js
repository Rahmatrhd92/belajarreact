import Hero from "./Hero";
import Navigation from "./Navigation";
import Cardaboud from "./Cardaboud";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Cardkegiatan from "./Cardkegiatan";
import Komentar from "./Komentar";
import about1 from "./../assets/print.png";
import about2 from "./../assets/sablon.png";
import about3 from "./../assets/pure.jpg";
import Solution from "./Solution";
import solution1 from "./../assets/spanduk mokap khusus.png";
import Bannerpromo from "./Bannerpromo";
import bannerpro from "./../assets/desain dan cetak banner.jpg";
import bannerpro1 from "./../assets/cetak brosur.jpg"

// import port1 from "./../assets/porto.jpg";
// import port2 from "./../assets/mks.jpg";
// import port3 from "./../assets/bc.jpg";
// import port4 from "./../assets/1519.jpg";
// import port5 from "./../assets/hasyimi dan irmawati .jpg";
// import port6 from "./../assets/undangan saku aceh.jpg";

import Tampung from "./Tampung";
import { API_URL } from "../utils/constans";

import axios from "axios";









export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryYangDipilih: "Banner",
      // keranjangs: [],
      komentars: [],
      emailKomen: "",
      pesan: "",
      id: "",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoryYangDipilih)
      .then((res) => {
        // console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
      // axios
      // .get(API_URL + "keranjangs")
      // .then((res) => {
      //   //cek untuk melihat array di console
      //   // console.log("Response : ", res)
      //   const keranjangs = res.data;
      //   this.setState({ keranjangs });
      // })
      // .catch((error) => {
      //   console.log("Error yaa", error);
      // });
  }

  componentDidUpdate(prevState){
    if(this.state.keranjangs !== prevState.keranjangs){
      axios
      .get(API_URL + "keranjangs")
      .then((res) => {
      
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });

    }
  }

  changeCategory = (value) => {
    this.setState({
      categoryYangDipilih: value,
      value: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        // console.log("Response : ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
  };


  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Data : ", this.state)
    if (this.state.id === "") {
      this.setState({
        komentars: [
          ...this.state.komentars,
          {
            id: this.state.komentars.length + 1,
            emailKoment: this.state.emailKoment,
            pesan: this.state.pesan,
          },
        ],
      });
    } else {
      const komentarYangSelainDipilih = this.state.komentars
        .filter((komentar) => komentar.id !== this.state.id)
        .map((filterKomentar) => {
          return filterKomentar;
        });

      this.setState({
        komentars: [
          ...komentarYangSelainDipilih,
          {
            id: this.state.komentars.length + 1,
            emailKoment: this.state.emailKoment,
            pesan: this.state.pesan,
          },
        ],
      });
    }

    this.setState({
      emailKoment: "",
      pesan: "",
      id: "",
    });
  };

  editData = (id) => {
    // console.log("Data :", id)
    //untuk menampilkan edit makanan di formnya
    const komentarYangDipilih = this.state.komentars
      .filter((komen) => komen.id === id)
      .map((filterKomentar) => {
        return filterKomentar;
      });

    //proses ketika di edit oleh user
    this.setState({
      emailKomen: komentarYangDipilih[0].emailKomen,
      pesan: komentarYangDipilih[0].pesan,
      id: komentarYangDipilih[0].id,
    });
  };

  render() {
    // console.log(this.state.categoryYangDipilih);
    const { menus, categoryYangDipilih } = this.state;
    return (
      <div>
        <Navigation
          changeCategory={this.changeCategory}
          categoryYangDipilih={this.categoryYangDipilih}
        />

        <Hero />
        {/* awal tulisan aboud */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>About</h1>
            </div>
          </div>
          {/* akhir tulisan aboud */}

          {/* awal card */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <Cardaboud
                image={about1}
                about="Digital Printing"
                description="mengerjakan segalam macam jenis spanduk, Baliho, Banner, Pamplet, Papan Digital hingga sticker"
              />
            </div>
            <div className="col-lg-4 col-12">
              <Cardaboud
                image={about2}
                about="Cetak Undangan"
                description="Terima segala Macam jenis cetak undangan , Pernikahan, Khitanan dll"
              />
            </div>
            <div className="col-lg-4 col-12">
              <Cardaboud
                image={about3}
                about="Sablon"
                description="Kami menerima Sablon Plasti, Label, Sablon Cup Hingga Tas"
              />
            </div>
          </div>
          {/* akhir card */}

          {/* awal kegiatan */}
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1>Our Product</h1>
            </div>
            <div>
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <Cardkegiatan key={menu.id} menu={menu} />
                  ))}
              </Row>
            </div>

            {/* akhir portfolio */}
          </div>
          <Solution image={solution1} />

          <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
          <Bannerpromo
            image={bannerpro}
            description="Banner Promosi yang elegant siap memperindah ruangan anda"
          />
          </div>
          <div className="col-lg-6 col-12">
           <Bannerpromo
            image={bannerpro1}
            description="Cetak Brosur Umroh"
          /> 
          </div>
          </div>
          
          <Komentar
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Tampung komentars={this.state.komentars} editData={this.editData} />
        </div>
      </div>
    );
  }
}
