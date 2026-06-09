import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <section>
      <div className="feat-text">
        <h2>Intelligent Automation</h2>
        <p>
          Everything you need to build, deploy, and scale automated workflows
          without writing a single line of code
        </p>
      </div>
      <FeatureCard />
    </section>
  );
}
