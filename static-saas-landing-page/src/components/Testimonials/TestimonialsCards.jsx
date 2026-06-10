import Star from '../../assets/icons/start_rating.svg';
import './Testimonials.css';

export function TestimonialsCards({ src, alt, name, prof, testimo }) {
  return (
    <div className="testimo-item testimo-flex">
      <div className="testimo-flex">
        <div className="profile-img">
          <img src={src} alt={alt} className="profile" />
        </div>
        <div>
          <p className="user-name">{name}</p>
          <p className="user-prof">{prof}</p>
        </div>
      </div>

      <div className="star">
        <img src={Star} alt="Star_Rating" className="icon" />
        <img src={Star} alt="Star_Rating" className="icon" />
        <img src={Star} alt="Star_Rating" className="icon" />
        <img src={Star} alt="Star_Rating" className="icon" />
        <img src={Star} alt="Star_Rating" className="icon" />
      </div>

      <p className="testimo-text">
        <em>{testimo}</em>
      </p>
    </div>
  );
}
