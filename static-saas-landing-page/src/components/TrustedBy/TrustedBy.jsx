import Domain from '../../assets/icons/domain.svg';
import Business from '../../assets/icons/business.svg';
import StoreFront from '../../assets/icons/storefront.svg';
import Apartment from '../../assets/icons/apartment.svg';
import CorporateFare from '../../assets/icons/corporate_fare.svg';
import './TrustedBy.css'

export function TrustedBy() {
  return (
    <section className='trusted-by container-surface'>
      <h4>TRUSTED BY 10,000+ TEAMS WORLDWIDE</h4>

      <div className="container icon-img">
        <IconImage src={Domain} alt={Domain} />
        <IconImage src={Business} alt={Business} />
        <IconImage src={StoreFront} alt={StoreFront} />
        <IconImage src={Apartment} alt={Apartment} />
        <IconImage src={CorporateFare} alt={CorporateFare} />
      </div>
    </section>
  );
}

function IconImage({ src, alt }) {
  return <img src={src} alt={alt} className="img-icon" />;
}
