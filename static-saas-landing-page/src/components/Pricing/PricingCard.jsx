import Check from '../../assets/icons/check.svg';
import { ButtonSmall, ButtonSmallOutline } from '../Buttons/Buttons';
import './Pricing.css';

const pricePlan = [
  {
    headline: 'Starter',
    description: 'For small team getting started.',
    cost: '₵290',
    duration: '/mo',
    list: ['Up to 5 users', '1,000 tasks/mo', 'Basic integrations'],
    CTA: 'Start Free Trials',
    tracker: false,
  },
  {
    headline: 'Pro',
    description: 'For growing teams requiring scale.',
    cost: '₵990',
    duration: '/mo',
    list: [
      'Up to 20 users',
      '10,000 tasks/mo',
      'Advanced integrations',
      'Custom reporting',
    ],
    CTA: 'Get Started',
    tracker: true,
  },
  {
    headline: 'Enterprise',
    description: 'Custom solutions for large orgs.',
    cost: 'Custom',
    list: [
      'Unlimited users',
      'Unlimited tasks',
      'Dedicated support',
      'SSO & Advanced Security',
    ],
    CTA: 'Contact Sales',
    tracker: false,
  },
];

export function PricingCards() {
  return (
    <div className="flex">
      {pricePlan.map((price) => (
        <div
          key={price.headline}
          className={price.tracker ? 'popular-item' : 'price-item'}
        >
          <h3 className="headline">{price.headline}</h3>
          <p className='desc'>{price.description}</p>

          <div className="cost">
            {price.cost}
            <span>{price.duration}</span>
          </div>

          <ul className="price-list">
            {price.list.map((item) => (
              <li key={item}>
                <img src={Check} alt="Check" className="" /> {item}
              </li>
            ))}
          </ul>

          <div className="price-btn">
            {price.tracker === true ? (
              <ButtonSmall text={price.CTA} />
            ) : (
              <ButtonSmallOutline text={price.CTA} />
            )}

            {price.tracker && <span className="tag">Most Popular</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
