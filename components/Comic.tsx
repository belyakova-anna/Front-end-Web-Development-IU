import React, { useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import { ComicData } from '../interfaces/comicInterface';

interface ComicProps {
  comicData: ComicData | null;
  imgDimensions: { width: number; height: number } | null;
}

const Comic: React.FC<ComicProps> = ({ comicData, imgDimensions }) => {
  const [dateString, setDateString] = useState<string>('Loading...');

  useEffect(() => {
    if (comicData) {
      const { year, month, day } = comicData;
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      const formattedDate = `${date.toLocaleDateString()} — ${formatDistanceToNow(date, { addSuffix: true })}`;
      setDateString(formattedDate);
    }
  }, [comicData]);

  if (!comicData) {
    return (
      <section className="Comic" id="comic">
        <main>
          <h1>Loading...</h1>
          <Image
            src="/loading.gif"
            alt="loading"
            className="comic-picture"
            width={200}
            height={200}
          />
          <p>{dateString}</p>
        </main>
      </section>
    );
  }

  const secure = (unsafe: string): string => {
    const purified = DOMPurify.sanitize(unsafe, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
    return purified;
  };

  const { title, img, alt } = comicData;

  return (
    <section className="Comic" id="comic">
      <main>
        <h1>{secure(title)}</h1>
        <Image
          src={img}
          alt={secure(alt || '')}
          className="comic-picture"
          width={imgDimensions?.width || 200}
          height={imgDimensions?.height || 200}
          priority={true}
        />
        <p>{secure(dateString)}</p>
      </main>
    </section>
  );
};

export default Comic;
