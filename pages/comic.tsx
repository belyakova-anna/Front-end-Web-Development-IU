import { GetServerSideProps } from 'next';
import Comic from '../components/Comic';
import { ComicData } from '../interfaces/comicInterface';
import sizeOf from 'image-size';
import { ISizeCalculationResult } from 'image-size/dist/types/interface';
import fetch, { Response } from 'node-fetch';
import Head from 'next/head';

interface ComicPageProps {
  comicData: ComicData | null;
  imgDimensions: { width: number; height: number } | null;
}

const ComicPage: React.FC<ComicPageProps> = ({
  comicData,
  imgDimensions,
}: ComicPageProps) => {
  return (
    <>
      <Head>
        <title>Comic</title>
        <meta name="description" content="Comic display" />
      </Head>
      <Comic comicData={comicData} imgDimensions={imgDimensions} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ComicPageProps
> = async () => {
  const email: string = 'a.belyakova@innopolis.university';
  let comicData: ComicData | null = null;
  let imgDimensions: { width: number; height: number } | null = null;

  try {
    const idResponse: Response = await fetch(
      `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`,
    );

    if (!idResponse.ok) {
      throw new Error(`Failed to fetch ID, status: ${idResponse.status}`);
    }

    const idData: string = await idResponse.text();

    const comicResponse: Response = await fetch(
      `https://fwd.innopolis.university/api/comic?id=${idData}`,
    );

    if (!comicResponse.ok) {
      throw new Error(
        `Failed to fetch comic data, status: ${comicResponse.status}`,
      );
    }

    comicData = (await comicResponse.json()) as ComicData;

    const imgResponse: Response = await fetch(comicData.img);
    const arrayBuffer: ArrayBuffer = await imgResponse.arrayBuffer();
    const buffer: Buffer = Buffer.from(arrayBuffer);
    const dimensions: ISizeCalculationResult = sizeOf(buffer);

    imgDimensions = {
      width: dimensions.width || 0,
      height: dimensions.height || 0,
    };
  } catch (error: any) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      comicData,
      imgDimensions,
    },
  };
};

export default ComicPage;
