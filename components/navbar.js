import Link from 'next/link';

function Navbar(){    
  return (         
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="/images/er.png" width="60" height="60"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
     <Link href="/"><a class="navbar-item" ><i className="fas fa-home fa-fw"></i>
        Home
      </a></Link>

      <Link href="/pesan"><a class="navbar-item">
        Pesan Hotel
      </a></Link>

      <div class="navbar-item has-dropdown is-hoverable">
       <Link href="" ><a class="navbar-link">
          Tempat Liburan
        </a></Link>

        <div class="navbar-dropdown  ">
          <Link href="/tempat_liburan/banyuwangi"><a class="navbar-item  ">
            Banyuwangi
          </a></Link>
          <Link href="/tempat_liburan/bali"><a class="navbar-item">
            Bali
          </a></Link>
          <Link href="/tempat_liburan/jakarta"><a class="navbar-item">
            Jakarta
          </a></Link>
          <Link href="/tempat_liburan/jogja"><a class="navbar-item">
            Jogja
          </a></Link>
          <Link href="/tempat_liburan/malang"><a class="navbar-item">
            Malang
          </a></Link>
          <Link href="/tempat_liburan/surabaya"><a class="navbar-item">
            Surabaya
          </a></Link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-link">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>    
    );
}
export default Navbar;