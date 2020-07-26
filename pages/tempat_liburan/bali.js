import Layout from '../../layouts/layout';
import Link from 'next/link';
function Bali(){
  return(
    <Layout>
    <section>
               <center><p className="title is-2">Bali Wonderful</p></center>
               <br/>
                <p className="subtitle is-6">Bali adalah sebuah pulau di Indonesia yang dikenal karena memiliki pegunungan berapi yang hijau, terasering sawah yang unik, pantai, dan terumbu karang yang cantik. Terdapat banyak tempat wisata religi seperti Pura Uluwatu yang berdiri di atas tebing. Di Selatan, kota pesisir pantai Kuta menawarkan wisata hiburan malam yang tak pernah sepi, sementara Seminyak, Sanur, dan Nusa Dua dikenal dengan suguhan resort yang populer. Pulau Bali juga dikenal sebagai tempat untuk relaksasi dengan yoga dan meditasi.</p>
                    <br />
                    <h6><Link href="/artikelwisata/[artikelwisata]" as="/artikelwisata/bali" className="font-weight-bold active"> PROFIL PROVINSI BALI</Link></h6>
                    <br/>
                    <center>
                        <figure>
                        <div class="columns is-mobile">
                        <div class="column">
                        <p class="bd-notification is-info"><img src="/images/uts3.jpg" width="250"/></p>
                       </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts4.jpeg" width="210"/></p>
                        </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts5.jpeg" width="210"/></p>
                        </div>      
                        </div>    
                        </figure>
                    </center>
    </section>
    </Layout>
  )
}
export default Bali;