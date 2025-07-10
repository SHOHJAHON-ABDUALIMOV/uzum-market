import React from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__left">
          <div className="location">
            <img src="/images/svg/locationIcon.svg" alt="locationIcon" />
            <span className="location_town">Toshkent</span>
            <img src="/images/svg/barMenuIcon.svg" alt="barMenuIcon" />
          </div>
          <p className="location__punkt">Topshirish punktlari</p>
        </div>
        <div className="navbar__right">
          <div className="navbar__links">
            <p className="navbar__links__seller">Sotuvchi bo‘lish</p>
            <p className="navbar__links_punct">Topshirish punktini ochish</p>
          </div>
          <div className="navbar__orders">
            <p className="navbar__orders__question">Savol-javob</p>
            <p className="navbar__orders__order">Buyurtmalarim</p>
          </div>
          <div className="navbar_language">
            <img src="/images/svg/languageIcon.svg" alt="languageIcon" />
            <p>O'zbekcha</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
