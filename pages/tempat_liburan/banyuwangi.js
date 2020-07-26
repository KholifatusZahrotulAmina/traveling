import Layout from '../../layouts/layout';
import Link from 'next/link';
function Banyuwangi(){
  return(
    <Layout>
    <section>
               <center><p className="title is-2">Banyuwangi Wonderful</p></center>
               <br/>
                <p className="subtitle is-6">Banyuwangi mirip luar negeri terdiri dari keindahan alam yang membuat kamu seakan-akan berada di luar negeri. Jadi, kamu tidak perlu jauh-jauh lagi ke luar negeri untuk menikmati berbagai destinasi wisata alam, karena Banyuwangi hadir sebagai solusi yang lebih murah dan tak kalah indah.</p>
                    <h6><Link href="/artikelwisata/[artikelwisata]" as="/artikelwisata/banyuwangi" className="font-weight-bold active"> PROFIL KABUPATEN BANYUWANGI</Link></h6>
                    <br/>
                    <center>
                        <figure>
                        <div class="columns is-mobile">
                        <div class="column">
                        <p class="bd-notification is-info"><img src="/images/uts.jpeg" width="212"/></p>
                       </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts1.jpeg" width="212"/></p>
                        </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts2.jpeg" width="210"/></p>
                        </div>      
                        </div>    
                        </figure>
                    </center>
    </section>
    </Layout>
  );
}
export default Banyuwangi;