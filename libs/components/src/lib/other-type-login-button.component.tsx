import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { CSSProperties, useState } from 'react';

const baseButtonStyle: CSSProperties = {
  color: '#fff',
  width: '100%',
  padding: '0.75rem',
  fontSize: '14px',
  marginBottom: '0.5rem',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease', // Smooth color transition on hover
};

const lightenColor = (color: string, percent: number) => {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16)
    .slice(1)}`;
};

const buttonData = [
  { label: 'Google', icon: <FaGoogle />, bgColor: '#db4437' },
  { label: 'Facebook', icon: <FaFacebook />, bgColor: '#4267b2' },
  { label: 'LinkedIn', icon: <FaLinkedin />, bgColor: '#0077b5' },
];

export const OtherTypeLoginButtons = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div>
      {buttonData.map(({ label, icon, bgColor }) => {
        const buttonStyle = {
          ...baseButtonStyle,
          backgroundColor: hoveredButton === label ? lightenColor(bgColor, 20) : bgColor,
        };

        return (
          <button
            key={label}
            type="button"
            style={buttonStyle}
            onMouseEnter={() => setHoveredButton(label)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span style={{ marginRight: '8px', width: '16px', height: '16px' }}>{icon}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
};
