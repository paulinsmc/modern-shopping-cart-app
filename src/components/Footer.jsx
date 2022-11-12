import "../App.css";
import {FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
        <h3>Reach us via:</h3>
      <ul className="footer-list">
        <li className="footer-icons"><FaFacebookF/></li>
        <li className="footer-icons"><FaInstagram/></li>
        <li className="footer-icons"><FaLinkedin/></li>
      </ul>
      <span>Ecommerce App &copy; {new Date().getFullYear()} All Rights Reserved</span>
    </footer>
  )
}

export default Footer
