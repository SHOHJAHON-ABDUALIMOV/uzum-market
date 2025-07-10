import React, { useState } from "react";

export default function LoginModal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="modal__div class__div" onClick={() => setVisible(true)}>
        <img src="/images/svg/loginIcon.svg" alt="loginIcon" />
        <p>Kirish</p>
      </div>
      {visible && (
        <div className="modal" onClick={() => setVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setVisible(false)}>
              &times;
            </span>
            <h2>Telefon raqamini kiriting</h2>
            <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
            <div className="phone-input">
              <span>+998</span>
              <input type="text" placeholder="00 000-00-00" maxLength="12" />
            </div>
            <button id="getCodeBtn">Kodni olish</button>
            <p className="policy-text">
              Avtotizatsiyadan o'tish orqali siz
              {/* <a href="">shaxsiy ma'lumotlarni qayta ishlash siyosatiga</a> */}
              rozilik bildirasiz
            </p>
          </div>
        </div>
      )}
    </>
  );
}
