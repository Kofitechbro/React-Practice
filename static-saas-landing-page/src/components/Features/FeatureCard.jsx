import AutoAwesomeIcon from '../../assets/icons/auto_awsome.svg';
import SortIcon from '../../assets/icons/sort.svg';
import GroupWorkIcon from '../../assets/icons/group_work.svg';
import Monitoring from '../../assets/icons/monitoring.svg';
import IntergrationIcon from '../../assets/icons/intergration_instructions.svg';
import DashboardCustomizeIcon from '../../assets/icons/dashboard_customize.svg';
import './Features.css';

const featureList = [
  {
    id: 1,
    img: AutoAwesomeIcon,
    title: 'Workflow Automation',
    description:
    'Design complex logical flows visually. Connect your tools and let NovaFlow handle the rest.',
    color: '#dbe1ff',
  },
  {
    id: 2,
    img: SortIcon,
    title: 'AI Task Prioritization',
    description:
      'Our ML models analyze your backlog and automatically surface the highest-impact tasks for your team',
    color: '#eaddff',
  },
  {
    id: 3,
    img: GroupWorkIcon,
    title: 'Team Collaboration',
    description:
      'Shared workspaces ensure everyone is aligned. Tag teammates, leave comments, and track progress.',
    color: '#71f8e4',
  },
  {
    id: 4,
    img: Monitoring,
    title: 'Real-Time Analytics',
    description:
      'Gain immediate insights into workflow performance, identifying bottlenecks before they impact delivery.',
    color: '#dbe1ff',
  },
  {
    id: 5,
    img: IntergrationIcon,
    title: 'Smart Integration',
    description:
      'Seamlessly connect with over 150+ popular enterprise tools including Slack, Jira, and Salesforce.',
    color: '#eaddff',
  },
  {
    id: 6,
    img: DashboardCustomizeIcon,
    title: 'Workflow Automation',
    description:
      'Build personalized views of your data. Drag-and-drop widgets to monitor what matters most to you.',
    color: '#71f8e4',
  },
];

export function FeatureCard(props) {
  return (
    <div className='feature-wrap'>
      {featureList.map((feature) => (
        <div key={feature.id} className='feature-item container-surface'>
          <div style={{ backgroundColor: feature.color }} className='feat-icon'>
            <img src={feature.img} alt={feature.title} className="icon" />
          </div>

          <h3>{feature.title}</h3>

          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
