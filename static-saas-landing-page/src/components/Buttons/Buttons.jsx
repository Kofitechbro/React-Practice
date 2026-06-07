import './Buttons.css';

// Buttons Small

export function ButtonSmall({ text }) {
  return <button className="btn-small primary-btn">{text}</button>;
}

export function ButtonSmallText({ text }) {
  return <button className="btn-text">{text}</button>;
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

// Button Large
export function ButtonLarge({ text, icon }) {
  return (
    <button>
      {icon.icon} {text.text}
    </button>
  );
}

export function ButtonLargeOutline({ text, icon }) {
  return (
    <button>
      {icon.icon} {text.text}
    </button>
  );
}

export function ButtonLargeText({ text, icon }) {
  return (
    <button>
      {icon.icon} {text.text}
    </button>
  );
}

// Button Xlarge
export function ButtonXlarge({ text, icon }) {
  return (
    <button>
      {icon.icon} {text.text}
    </button>
  );
}

export function ButtonXlargeOutline({ text, icon }) {
  return (
    <button>
      {icon.icon} {text.text}
    </button>
  );
}

export function ButtonXlargeText({ text, icon }) {
  return (
    <button>
      {icon.icon} {text.text}
    </button>
  );
}
