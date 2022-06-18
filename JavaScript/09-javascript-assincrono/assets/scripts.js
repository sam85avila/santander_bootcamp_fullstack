
const BASE_URL = '';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const img = document.getElementById('cat');
    img.src = await getCats(); 
};

catBtn.addEventListener('click', loadImg);

loadImg();
