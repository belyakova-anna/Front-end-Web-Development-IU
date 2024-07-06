import { GetStaticProps } from "next";
import Comic from "../components/Comic";
import { ComicData } from "../interfaces/comicInterface";
import sizeOf from "image-size";

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
    const idResponse = await fetch(
      `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`,
    );
    if (!idResponse.ok) {
      throw new Error(`Status: ${idResponse.status}`);
    }
    const idData = await idResponse.text();

    const comicResponse = await fetch(
      `https://fwd.innopolis.university/api/comic?id=${idData}`,
    );
    if (!comicResponse.ok) {
      throw new Error(`Status: ${comicResponse.status}`);
    }
    comicData = await comicResponse.json();

    // Получаем размеры изображения
    const response = await fetch(comicData!.img);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const dimensions = sizeOf(buffer);

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
