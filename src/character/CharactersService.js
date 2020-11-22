import axios from 'axios';
import md5 from 'js-md5';
const PRIVATE_KEY = "7cd3684824a067744989aa33c44a0fefb24a8740";
const PUBLIC_KEY = "22e9bab7b462ebbd01fee470d5c30192";

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export async function getCharacters(payload){
    return axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=${payload.limit}&offset=${payload.offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`);
};

export async function getProfile({ payload }){
    return axios.get(`https://gateway.marvel.com/v1/public/characters/${payload}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
};

export async function searchCharacters(payload){
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${payload.parameter}&limit=${payload.limit}&offset=${payload.offset}&apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash.hex()}`)
};