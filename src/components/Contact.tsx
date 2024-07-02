import React from 'react';
import SocialIcon from './SocialIcon';
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
        <SocialIcon
          link="https://t.me/belyak_anya"
          iconSrc={telegramIcon}
          alt="Telegram"
          id="tg-link"
        />
        <SocialIcon
          link="https://github.com/belyakova-anna"
          iconSrc={githubIcon}
          alt="Github"
          id="gh-link"
        />
        <SocialIcon
          link="mailto:belyakova.anna.st@yandex.ru"
          iconSrc={mailIcon}
          alt="Mail"
          id="email"
        />
        <SocialIcon
          link="https://codeforces.com/profile/belyak_anya?mobile=false"
          iconSrc={codeforcesIcon}
          alt="Codeforces"
          id="cf-link"
        />
      </div>
    </section>
  );
};

export default Contact;
