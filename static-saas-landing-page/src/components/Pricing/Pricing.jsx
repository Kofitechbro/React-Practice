import { PricingCards } from './PricingCard';

export function Pricing() {
  return (
    <section>
      <div className="sect-text">
        <h2>Simple, transparent pricing</h2>
        <p>Choose the plan that fits your team's needs.</p>
      </div>
      <PricingCards />
    </section>
  );
}
