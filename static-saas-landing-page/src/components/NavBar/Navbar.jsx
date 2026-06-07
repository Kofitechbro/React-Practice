import './Navbar.css';
import { ButtonSmall, ButtonSmallText } from '../Buttons/Buttons';

export function Navbar() {
  return (
    <nav>
      <div className="logo">NovaFlow</div>

      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="btn-group">
        <ButtonSmallText text="Login" />
        <ButtonSmall text="Get Started" />
      </div>
    </nav>
  );
}
