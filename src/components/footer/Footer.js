import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Nosotros</h6>
            <p className="text-justify">La Loca Rola <i> </i> Somos una regueria y grow-shop nacido hace 5 años en la gloriosa ciudad de avellaneda, provincia de Buenos aires....</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categorias</h6>
            <ul className="footer-links">
              <li><a href="index.html">Remeras</a></li>
              <li><a href="index.html">Buzos</a></li>
              <li><a href="index.html">Camperas</a></li>
              <li><a href="index.html">Gorros</a></li>
              <li><a href="index.html">Varios</a></li>
              <li><a href="index.html">Grow</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul className="footer-links">
              <li><a href="index.html">Nosotros</a></li>
              <li><a href="index.html">Contactanos</a></li>
              <li><a href="index.html">Terminos y condiciones</a></li>
              
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 todos los derechos reservados <a href="index.html">@matesconger</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="index.html"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="index.html"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="index.html"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="index.html"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;