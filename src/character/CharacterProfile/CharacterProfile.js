import React from 'react';
import { useSelector } from 'react-redux';

const CharacterProfile = () => {
    const { characters } = useSelector(state => state.characters);
    console.log('profile characters = ', characters);
    const { character }  = useSelector(state => state.characters);
    console.log('profile character = ', character);

    return (
        <h1>Olá CLAU</h1>
    )
}

export default CharacterProfile;