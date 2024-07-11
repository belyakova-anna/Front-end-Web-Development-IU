import { GetStaticProps } from "next";
import Comic from "../components/Comic";
import { ComicData } from "../interfaces/comicInterface";
import sizeOf from "image-size";
import { ISizeCalculationResult } from "image-size/dist/types/interface";

interface ComicPageProps {
  comicData: ComicData | null;
  imgDimensions: { width: number; height: number } | null;
}

const ComicPage: React.FC<ComicPageProps> = ({ comicData, imgDimensions }) => {
  return <Comic comicData={comicData} imgDimensions={imgDimensions} />;
};

export const getStaticProps: GetStaticProps<ComicPageProps> = async () => {
  const email = "a.belyakova@innopolis.university";
  let comicData: ComicData | null = null;
  let imgDimensions: { width: number; height: number } | null = null;

  try {
    const idResponse: Response = await fetch(
      `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`,
    );
    if (!idResponse.ok) {
      throw new Error(`Status: ${idResponse.status}`);
    }
    const idData: string = await idResponse.text();

    const comicResponse: Response = await fetch(
      `https://fwd.innopolis.university/api/comic?id=${idData}`,
    );
    if (!comicResponse.ok) {
      throw new Error(`Status: ${comicResponse.status}`);
    }
    comicData = await comicResponse.json();

    const response: Response = await fetch(comicData!.img);
    const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
    const buffer: Buffer = Buffer.from(arrayBuffer);
    const dimensions: ISizeCalculationResult = sizeOf(buffer);

    imgDimensions = {
      width: dimensions.width || 0,
      height: dimensions.height || 0,
    };
  } catch (error) {
    console.error("Error:", error);
  }

  return {
    props: {
      comicData,
      imgDimensions,
    },
  };
};

export default ComicPage;
