import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ children, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className={`tooltip tooltip-${position}`}>Thanks for hovering! I'm a tooltip {position.charAt(0).toUpperCase() + position.slice(1)}</div>
      )}
    </div>
  );
};

export default Tooltip;
