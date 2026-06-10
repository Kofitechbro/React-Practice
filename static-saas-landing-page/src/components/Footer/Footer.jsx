import Public from '../../assets/icons/public.svg';
import Share from '../../assets/icons/share.svg';
import Hub from '../../assets/icons/hub.svg';
import './Footer.css';

export function Footer() {
  return (
    <section className='footer-container'>
      <div className='footer'>
        <div className='company-info'>
          <div className="log">NovaFlow</div>
          <p>AI-powered workflow automation platform for modern teams.</p>

          <div className='footer-icon'>
            <img src={Public} alt="Public" className="icon" />
            <img src={Share} alt="Share" className="icon" />
            <img src={Hub} alt="Hub" className="icon" />
          </div>
        </div>

        <div className='footer-item'>
          <h4>PRODUCTS</h4>
          <ul>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy-right">
        <p>© 2026 NovaFlow AI. All rights reserved.</p>

        <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>

    </section>
  );
}
