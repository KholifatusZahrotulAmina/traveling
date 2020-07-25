import Layout from '../layouts/layout';

 export default function Form(){
  return(
    <div className="container"> 
       <Layout>
         <center><p class="title is-2 is-black" >Form Pengisian Pemesanan</p></center>
         <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field">
<label class="label">Alamat</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field">
<label class="label">NIK</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Tempat</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Pilih Tempat</option>
        <option>Banyuwangi</option>
        <option>Bali</option>
        <option>Jakarta</option>
        <option>Jogja</option>
        <option>Malang</option>
        <option>Surabaya</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Pesan</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
    </Layout>
    </div>
  );
}
