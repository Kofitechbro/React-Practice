import { StatsCard } from './statsCard';
import './Stats.css';

export function Stats() {
  return (
    <div className='bg-stats'>
      <section className="stats">
        <StatsCard num="10,000+" description="Customers" />
        <StatsCard num="98%" description="Satisfaction" />
        <StatsCard num="2M+" description="Automated Tasks" />
        <StatsCard num="150+" description="Integrations" />
      </section>
    </div>
  );
}
