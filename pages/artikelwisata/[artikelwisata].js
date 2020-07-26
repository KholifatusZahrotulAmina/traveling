import wisata from '../../dataset/dummy.json'; 
import Layout from '../../layouts/layout';
import Link from 'next/link';
const Wisata =(props)=> {
    return(
        <Layout>
            <div className="container">
                <center>
            <img class="img-thumbnail" src={props.gambar}/>
            </center>
            {props.diskripsi}
            <br/>
            <br/>
            {props.sejarah}
            <br></br>
            {props.diskripsisejarah}
            </div>
        </Layout>
    )
}
export async function getStaticProps(context){
    let artikelwisata = context.params.artikelwisata;
    let data = wisata.find(x => x.id == artikelwisata);

    let {gambar, diskripsi, sejarah, diskripsisejarah} = data;

    return{
        props : {
            gambar, diskripsi, sejarah, diskripsisejarah 
        }
    }
}

export async function getStaticPaths(){
    return{
        paths : wisata.map(data =>(
            {params : {artikelwisata: data.id}}
        )),
        fallback: false
    }
}

export default Wisata;