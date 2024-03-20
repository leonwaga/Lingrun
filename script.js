import React, { useState } from 'react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type="checkbox" id="toggle" checked={isOpen} onChange={toggleNav} />
      <label htmlFor="toggle">&#9776;</label>
      {isOpen && (
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
