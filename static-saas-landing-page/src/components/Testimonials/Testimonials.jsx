import { TestimonialsCards } from './TestimonialsCards';
import SarahJenkins from '../../assets/imgs/Sarah Jenkins.jpg';
import MarcusChen from '../../assets/imgs/Marcus Chen.jpg';
import ElenaRodriguez from '../../assets/imgs/Elena Rodriguez.jpg';

const userInfo = [
  {
    Image: SarahJenkins,
    name: 'Sarah Jenkins',
    prof: 'CTO at TechFlow',
    testimonial:
      '"NovaFlow has completely transformed how our team manages complex projects. The AI prioritization is a game-changer."',
  },
  {
    Image: MarcusChen,
    name: 'Marcus Chen',
    prof: 'Head of Ops at ScaleUp',
    testimonial:
      '"The integration capabilities are unmatched. We connected our entire stack in hours, not weeks. Highly recommended!"',
  },
  {
    Image: ElenaRodriguez,
    name: 'Elena Rodriguez',
    prof: 'Product Manager at Innovate',
    testimonial:
      '"NovaFlow has completely transformed how our team manages complex projects. The AI prioritization is a game-changer."',
  },
];

console.log(userInfo);
console.log(userInfo.length);

export function Testimonials() {
  return (
    <section>
      <div  className='sect-text'>
        <h2>Trusted by Industry Leaders</h2>
        <p>Hear from the teams transforming their workflows with NovaFlow</p>
      </div>
      <div className="testimo">
        {userInfo.map((user) => (
          <TestimonialsCards
            key={user.name}
            src={user.Image}
            alt={user.name}
            name={user.name}
            prof={user.prof}
            testimo={user.testimonial}
          />
        ))}
      </div>
    </section>
  );
}
