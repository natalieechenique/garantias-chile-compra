import React from 'react';
import '../styles/_footer.scss';
import logowhite from '../images/logowhite.png';
// import bg5 from '../images/bg5.png';


function Footer() {

  return (

    <div className="footer-container mb-0">
      {/* <img src={bg5} alt="Footer Background" weight='100%' height='300px' mb-0 /> */}
      <section class="footer text-center text-lg-start">

        <div className="footer d-flex justify-content-center justify-content-lg-between">

          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-4">
              {/* <!-- Grid column --> */}
              <div className="fw-bold col-xs-4 mb-4 col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
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
              <div className=" col-xs-4 col-md-4 col-lg-2 col-xl-2 mx-auto mb-2">
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
              <div className="col-xs-4 col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                {/* <!-- LOGO INGE--> */}
                <span className="text-uppercase fw-bold mb-2">
                  <img src={logowhite} alt='Logo' className='logo-white' width='200px' />
                </span>
              </div>
              {/* <!-- Grid column --> */}
            </div>


            <div className='footer2 d-flex justify-content-center justify-content-lg-between'>
              <section class="footer2 text-center text-lg-start">
                <div className="text-center col-xs-12 col-md-12 col-lg-12 col-xl-12 mx-auto mb-md-0 pb-1 expand-lg">
                  <a className="fw-bold" href="https://designseo.cl/"> ©DesignSeo 2021</a>
                </div>
              </section>

            </div>
          </div>  {/* <!-- Grid row --> */}
          {/* <!-- Grid row --> */}
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
