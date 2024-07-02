import React from 'react';
import telegramIcon from '../img/icons/telegram.png';
import githubIcon from '../img/icons/github.png';
import mailIcon from '../img/icons/mail.png';
import codeforcesIcon from '../img/icons/codeforces.png';

const Contact: React.FC = () => {
  return (
    <section className="ContactMe" id="contact">
      <div className="social-content">
        <h1>Get in touch</h1>
        <p>Need help from a software engineer? Want to follow me on codeforces? Feel free to message me for work or just to say hi!</p>
      </div>
      <div className="social-icons">
        <a href="https://t.me/belyak_anya" target="_blank" rel="noopener noreferrer" id="tg-link">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://github.com/belyakova-anna" target="_blank" rel="noopener noreferrer" id="gh-link">
          <img src={githubIcon} alt="Github" />
        </a>
        <a href="mailto:belyakova.anna.st@yandex.ru" target="_blank" rel="noopener noreferrer" id="email">
          <img src={mailIcon} alt="Mail" />
        </a>
        <a href="https://codeforces.com/profile/belyak_anya?mobile=false" target="_blank" rel="noopener noreferrer" id="cf-link">
          <img src={codeforcesIcon} alt="Codeforces" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
