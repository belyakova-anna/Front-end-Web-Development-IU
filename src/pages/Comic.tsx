import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { formatDistanceToNow } from 'date-fns';
import loading from '../img/icons/loading.gif';
import { ComicData } from '../interfaces';

interface ComicProps {
  email: string;
}

const Comic: React.FC<ComicProps> = ({ email }) => {
  const [comicData, setComicData] = useState<ComicData | null>(null);

  useEffect(() => {
    const getComicData = async () => {
      try {
        const idResponse : Response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`);
        if (!idResponse.ok) {
          throw new Error(`Status: ${idResponse.status}`);
        }
        const idData : string = await idResponse.json();

        const comicResponse : Response = await fetch(`https://fwd.innopolis.university/api/comic?id=${idData}`);
        if (!comicResponse.ok) {
          throw new Error(`Status: ${comicResponse.status}`);
        }
        const comicData: ComicData = await comicResponse.json();
        setComicData(comicData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getComicData();
  }, [email]);

  if (!comicData) {
    return (
      <div>
        <main>
          <h1 id="title-img">Loading...</h1>
          <img id="comic-img" className="comic-picture" src={loading} alt="loading" />
          <p id="date"></p>
        </main>
      </div>
    );
  }

  const secure = (unsafe: string): string => {
    return DOMPurify.sanitize(unsafe, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    });
  };

  const { title, img, alt, year, month, day } = comicData;
  const date : Date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  return (
    <div>
      <main>
        <h1 id="title-img">{secure(title)}</h1>
        <img id="comic-img" className="comic-picture" src={img} alt={secure(alt)} />
        <p id="date">{date.toLocaleDateString()} — {formatDistanceToNow(date, { addSuffix: true })}</p>
      </main>
    </div>
  );
};

export default Comic;
