import axios from 'axios';
import md5 from 'js-md5';
const PRIVATE_KEY = "cb796e8ccec43ef98fce8ba6e70c078804694c23";
const PUBLIC_KEY = "91f9d48ee4dc7cd73e07a85c09a02d49";

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export async function getCharacters({ payload }){
    console.log('************************  service getCharacters', payload);
    return axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=60&offset=${payload}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`);
};

