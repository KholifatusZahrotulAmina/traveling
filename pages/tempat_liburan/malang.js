import Layout from '../../layouts/layout';
function Malang(){
  return(
    <Layout>
    <section>
               <center><p className="title is-2">Malang Wonderful</p></center>
               <br/>
                <p className="subtitle is-6"> Kota Malang adalah sebuah kota yang terletak di Provinsi Jawa Timur, Indonesia. Kota ini terletak 90 km sebelah selatan Surabaya dan merupakan kota terbesar di kedua di Jawa Timur setelah Surabaya, serta merupakan salah satu kota terbesar di Indonesia menurut jumlah penduduk.</p>
                    <br />
                    <br/>
                    <center>
                        <figure>
                        <div class="columns is-mobile">
                        <div class="column">
                        <p class="bd-notification is-info"><img src="/images/uts9.jpg" width="250"/></p>
                       </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts10.jpg" width="300"/></p>
                        </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts11.jpg" width="280"/></p>
                        </div>      
                        </div>    
                        </figure>
                    </center>
    </section>
    </Layout>
  );
}
export default Malang;