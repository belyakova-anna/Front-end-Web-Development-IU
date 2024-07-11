import React, { useState, useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { ComicData } from "../interfaces/comicInterface";

interface ComicProps {
  comicData: ComicData | null;
  imgDimensions: { width: number; height: number } | null;
}

const Comic: React.FC<ComicProps> = ({ comicData, imgDimensions }) => {
  const [dateString, setDateString] = useState<string>("Loading...");

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
          <h1 id="title-img">Loading...</h1>
          <Image
            src="/loading.gif"
            alt="loading"
            className="comic-picture"
            id="comic-id"
            width={200}
            height={200}
          />
          <p id="date">{dateString}</p>
        </main>
      </section>
    );
  }

  const secure = (unsafe: string): string => {
    return DOMPurify.sanitize(unsafe, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    }) as string;
  };

  const { title, img, alt } = comicData;

  return (
    <section className="Comic" id="comic">
      <main>
        <h1
          id="title-img"
          dangerouslySetInnerHTML={{ __html: secure(title) }}
        />
        <Image
          id="comic-img"
          className="comic-picture"
          src={img}
          alt={secure(alt)}
          width={imgDimensions?.width || 200}
          height={imgDimensions?.height || 200}
        />
        <p id="date" dangerouslySetInnerHTML={{ __html: secure(dateString) }} />
      </main>
    </section>
  );
};

export default Comic;
