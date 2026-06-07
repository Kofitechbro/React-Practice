import { ButtonMedium, ButtonMediumOutline } from '../Buttons/Buttons';
import DashboardMockupImage from '../../assets/imgs/Dashboard Mockup.jpg';
import PlayCircle from '../../assets/icons/play_circle.svg'
import './Hero.css';

export function Hero() {
  return (
    <header>
      <section className="container hero">
        <div className="wrapper hero-content">
          <h1>Automate Workflows. Accelerate Growth.</h1>
          <p>
            NovaFlow helps teams eliminate repetitive tasks, streamline
            operations, and focus on what matters most.
          </p>

          <div className="btn-group">
            <ButtonMedium text="Start Free Trial" />
            <ButtonMediumOutline icon={PlayCircle} text='Watch Demo' />
          </div>
        </div>
        <div className="wrapper img-wrapper">
          <img src={DashboardMockupImage} alt={DashboardMockupImage} />
        </div>
      </section>
    </header>
  );
}
