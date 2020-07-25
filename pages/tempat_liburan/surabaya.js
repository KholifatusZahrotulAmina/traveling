import Layout from '../../layouts/layout';
function Surabaya(){
  return(
    <Layout>
    <section>
               <center><p className="title is-2">Surabaya Wonderful</p></center>
               <br/>
                <p className="subtitle is-6">  Surabaya Adalah: ibu kota Provinsi Jawa Timur, Indonesia sekaligus menjadi kota metropolitan terbesar di provinsi tersebut. Surabaya merupakan kota terbesar kedua di Indonesia setelah Jakarta.</p>
                    <br />
                    <br/>
                    <center>
                        <figure>
                        <div class="columns is-mobile">
                        <div class="column">
                        <p class="bd-notification is-info"><img src="/images/uts12.jpg" width="400"/></p>
                       </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts13.jpg" width="310"/></p>
                        </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts14.jpg" width="260"/></p>
                        </div>      
                        </div>    
                        </figure>
                    </center>
    </section>
    </Layout>
  );
}
export default Surabaya;