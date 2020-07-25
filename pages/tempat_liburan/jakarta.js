import Layout from '../../layouts/layout';
function Jakarta(){
  return(
    <Layout>
    <section>
               <center><p className="title is-2">Jakarta Wonderful</p></center>
               <br/>
                <p className="subtitle is-6"> adalah ibu kota negara dan kota terbesar di Indonesia. Jakarta merupakan satu-satunya kota di Indonesia yang memiliki status setingkat provinsi. Jakarta terletak di pesisir bagian barat laut Pulau Jawa.</p>
                    <br />
                    <br/>
                    <center>
                        <figure>
                        <div class="columns is-mobile">
                        <div class="column">
                        <p class="bd-notification is-info"><img src="/images/uts15.jpg" width="350"/></p>
                       </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts16.jpg" width="280"/></p>
                        </div>
                        <div class="column">
                         <p class="bd-notification is-info"><img src="/images/uts17.jpg" width="300"/></p>
                        </div>      
                        </div>    
                        </figure>
                    </center>
    </section>
    </Layout>
  );
}
export default Jakarta;