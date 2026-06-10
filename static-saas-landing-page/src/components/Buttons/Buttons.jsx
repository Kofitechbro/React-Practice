import './Buttons.css';

// Buttons Small

export function ButtonSmall({ text }) {
  return <button className="btn-small primary-btn">{text}</button>;
}

export function ButtonSmallText({ text }) {
  return <button className="btn-text">{text}</button>;
}

export function ButtonSmallOutline({ text }) {
  return <button className="btn-small btn-outline">{text}</button>;
}

// Button Medium
export function ButtonMedium({ text }) {
  return <button className="primary-btn btn-medium">{text}</button>;
}

export function ButtonMediumOutline({ text, icon }) {
  return (
    <button className='btn-outline btn-medium'>
      <img src={icon} alt={icon} className='icon' /> {text}
    </button>
  );
}

export function ButtonLarge({text}) {
  return <button className='btn-large primary-btn'>{text}</button>
}

export function ButtonLargeOutline({text}) {
  return <button className='btn-large btn-outline'>{text}</button>
}