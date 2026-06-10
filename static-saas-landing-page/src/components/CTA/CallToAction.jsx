import { ButtonLarge, ButtonLargeOutline } from '../Buttons/Buttons';
import './CallToAction.css';

export function CallToAction() {
  return (
    <section className="CTA">
      <div className="sect-text">
        <h2>Ready to Transform Your Workflow?</h2>
        <p>
          Join over 10,000 teams who have already streamlined their operations
          with NovaFlow.
        </p>
      </div>

      <div className="btn-group">
        <ButtonLarge text="Start Your Free Trails" />
        <ButtonLargeOutline text="Talk to Sales" />
      </div>
    </section>
  );
}
