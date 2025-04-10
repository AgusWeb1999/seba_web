import React from "react";
import "../css/FooterComponent.css"; 

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="#" className="logo">Stealframing Construction</a>
        </div>
        <div className="footer-text">
            <p>&copy; 2024 Stealframing Construction. All rights reserved..</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;