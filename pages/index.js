import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../layouts/layout';

class Landingpage extends Component{
  render(){
    return (
      <Layout>
        <div className="container">
        <center><img src="/images/tour.jpg" width="800"/></center>
        <center><p class="title is-2">Traveling Nusantara</p>
        <p class="subtitle is-5">Luangkan waktu libur anda untuk nikmati wisata di sekitar anda sekarang juga bersama Srikandi Travelling</p>
        </center>
        </div>
      </Layout>
    );
  }
}

export default Landingpage;