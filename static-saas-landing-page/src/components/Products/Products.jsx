import WorkFlowBuilder from '../../assets/imgs/Workflow Builder UI.jpg';
import AnalyticsDashboard from '../../assets/imgs/Analytics Dashboard UI.jpg';
import TeamWorkspace from '../../assets/imgs/team_workspace.jpg';
import CircleCheck from '../../assets/icons/check_circle.svg';
import './Product.css'

export function Products() {
  return (
    <section className='container-surface product-container flex-column'>
      <div className="container product-item">
        
        <div className="product-content flex-column">
          <h4 className="text-secondary">AUTOMATION ENGINE</h4>

          <h2>Build workflows at the speed of thought.</h2>

          <p>
            Our visual builder lets you construct complex conditional logic
            simply by dragging nodes. Test your flows in real-time before
            deploying to production.
          </p>

          <ul className='flex-column item-list'>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              No-code visual builder
            </li>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Version control and rollback
            </li>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Advanced conditional logic
            </li>
          </ul>
        </div>

        <div className='deep-surface'>
          <img src={WorkFlowBuilder} alt="Workflow Builder" />
        </div>
      </div>

      <div className="container product-item">
        <div className='deep-surface'>
          <img src={AnalyticsDashboard} alt="Analytics Dashboard" />
        </div>

        <div className="product-content flex-column">
          <h4 className="text-tertiary">ANALYTICS HUB</h4>

          <h2>Data that drives decisions.</h2>

          <p>
            Stop guessing. NovaFlow aggregates performance data across all your
            connected tools to provide a unified, actionable view of your team's
            productivity.
          </p>

          <ul className='flex-column item-list'>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Custom report generation
            </li>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Real-time alerting
            </li>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Exportable CSV/PDF reports
            </li>
          </ul>
        </div>
      </div>

      <div className="container product-item">
        <div className="product-content flex-column">
          <h4 className="text-secondary">COLLABORATION SUITE</h4>

          <h2>Work better, together.</h2>

          <p>
            NovaFlow brings your team's communication and tasks into one unified
            workspace. Say goodbye to fragmented tools and hello to seamless
            collaboration.
          </p>

          <ul className='flex-column item-list'>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Real-time activity feeds
            </li>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Shared task status tracking
            </li>
            <li>
              <img src={CircleCheck} alt="Circle check" className="icon" />{' '}
              Contextual team commenting
            </li>
          </ul>
        </div>

        <div className='deep-surface'>
          <img src={TeamWorkspace} alt="Team Workspace" />
        </div>
      </div>
    </section>
  );
}
