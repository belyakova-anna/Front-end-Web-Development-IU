const getID = async () => {
    const params = new URLSearchParams({ email: 'a.belyakova@innopolis.university' });
    const url = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

const f = async (receivedID) => {
    const params = new URLSearchParams({ id: receivedID });
    const url = `https://fwd.innopolis.university/api/comic?${params.toString()}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

const secure = (unsafe) => {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
};


(async () => {
    const id = await getID();
    const pictureData = await f(id);
    if (pictureData) {
        document.getElementById('title').textContent = secure(pictureData.title);
        const imgElement = document.getElementById('comic-img');
        imgElement.src = secure(pictureData.img);
        imgElement.alt = secure(pictureData.alt);
        const date = new Date(secure(pictureData.year), secure(pictureData.month) - 1, secure(pictureData.day));
        document.getElementById('date').textContent = date.toLocaleDateString();
    } else {
        document.getElementById('comic-container').textContent = 'Data loading error.';
    }
})();