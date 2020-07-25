import Header from '../components/header'; 
import Footer from '../components/footer'; 
import Head from 'next/head'; 
 
const Layout = (props) => (     
<div>         
    <Head>                       
        <meta name="viewport" content="width=device-width, initialscale=1.0" />  
        <link rel="stylesheet" href="/css/bulma.css" />   
        </Head>                  
        <Header />   
        <section class="hero is-warning is-fullheight">
        <div class="hero-body">
            <div class="container">
            {props.children} 
        </div>
        </div>
        </section>                                        
        <Footer />
        </div>  
        ) ;
export default Layout;