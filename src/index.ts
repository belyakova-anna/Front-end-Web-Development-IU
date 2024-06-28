import DOMPurify from 'dompurify';
import { ComicData } from './interfaces';
import { formatDistanceToNow } from 'date-fns';

const getID = async (): Promise<string | null> => {
    const params : URLSearchParams = new URLSearchParams({ email: 'a.belyakova@innopolis.university' });
    const url : string = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

    try {
        const res : Response = await fetch(url);
        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        const data: string = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

const f = async (receivedID: string): Promise<ComicData | null> => {
    const params : URLSearchParams = new URLSearchParams({ id: receivedID });
    const url : string = `https://fwd.innopolis.university/api/comic?${params.toString()}`;

    try {
        const res : Response = await fetch(url);
        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        const data: ComicData = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

const secure = (unsafe: string): string => {
    return DOMPurify.sanitize(unsafe, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    });
};

(async () => {
    const id : string | null = await getID();
    if (!id) {
        document.getElementById('date')!.textContent = 'Error loading ID.';
        return;
    }

    const pictureData : ComicData | null = await f(id);
    if (pictureData) {
        document.getElementById('title-img')!.textContent = secure(pictureData.title);
        const imgElement : HTMLImageElement= document.getElementById('comic-img') as HTMLImageElement;
        imgElement.src = pictureData.img;
        imgElement.alt = secure(pictureData.alt);
        const date : Date = new Date(parseInt(pictureData.year), parseInt(pictureData.month) - 1, parseInt(pictureData.day));
        document.getElementById('date')!.textContent = date.toLocaleDateString() + " — " + formatDistanceToNow(date, { addSuffix: true });
    } else {
        document.getElementById('date')!.textContent = 'Data loading error.';
    }
})();
