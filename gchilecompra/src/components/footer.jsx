import React from 'react';
// import '../css/footer.css';
 import '../styles/footer.scss';
 import logo from '../images/logo.png';


function Footer() {

return (

  <div className="footer">
  <section class="footer text-center text-lg-start ">
 
  <div className="footer d-flex justify-content-center justify-content-lg-between">

    <div className="container text-center text-md-start mt-4">
      {/* <!-- Grid row --> */}
      <div className="row mt-4">
        {/* <!-- Grid column --> */}
        <div className="fw-bold mb-4 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">inge!</h6>
          <p><a href="#!" className="text-reset">¿Quiénes somos?</a></p>
          <p><a href="#!" className="text-reset">¿Cómo operamos?</a></p>
          <p><a href="#!" className="text-reset">Producto</a></p>
          <p><a href="#!" className="text-reset">FAQ's</a></p>
          <p><a href="#!" className="text-reset">Nuestras empresas</a></p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><a href="#!" className="">Dirección</a></p>
          <p><a href="#!" className="">123456789</a></p>
          <p><a href="#!" className="">123456789</a></p>
          <p><a href="#!" className="">Mail</a></p>
        </div>
        {/* <!-- Grid column --> */}
{/* 
        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- LOGO INGE--> */}
          <span className="text-uppercase fw-bold mb-4">
          <img src={logo} alt='Logo' className='logo-white' width='150px'/>
          </span>
          </div>
        {/* <!-- Grid column --> */}
        </div>
        <div className="text-center p-4">
     <a className="fw-bold" href="https://designseo.cl/"> ©DesignSeo 2021</a>
  </div>
      {/* <!-- Grid row --> */}
    </div>
  </div>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
 
  {/* <!-- Copyright --> */}
</section>
{/* // <!-- Footer --> */}


 </div> 

);
}

export default Footer;







  {/* <div className="foot row"> */}

    {/* <div className="col-6 col-lg-3">FOOTER</div>
    <div className="col-6 col-lg-3">FOOTER</div>
    <div className="col-6 col-lg-3">FOOTER</div>
    <div className="col-6 col-lg-3">FOOTER</div>

    {/* <!-- Force next columns to break to new line --> */}
{/*     
    <div className="w-100"></div>

    <div className="col-6 col-lg-3">FOOTER</div>
    <div className="col-6 col-lg-3">FOOTER</div>
    <div className="col-6 col-lg-3">FOOTER</div>
    <div className="col-6 col-lg-3">FOOTER</div> */}
    



