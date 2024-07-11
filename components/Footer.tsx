import React from 'react';
import telegramIcon from '/public/img/icons/telegram.png';
import githubIcon from '/public/img/icons/github.png';
import mailIcon from '/public/img/icons/mail.png';
import codeforcesIcon from '/public/img/icons/codeforces.png';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="social-icons">
          <li>
            <a
              href="https://t.me/belyak_anya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={telegramIcon} alt="Telegram" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/belyakova-anna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubIcon} alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="mailto:belyakova.anna.st@yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={mailIcon} alt="Mail" />
            </a>
          </li>
          <li>
            <a
              href="https://codeforces.com/profile/belyak_anya?mobile=false"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={codeforcesIcon} alt="Codeforces" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
