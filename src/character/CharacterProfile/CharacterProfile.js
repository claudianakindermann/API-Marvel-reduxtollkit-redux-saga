import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CharacterProfile.style.css';
import { useParams } from "react-router-dom";
import { getProfileRequest } from './../charactersSlice';

const CharacterProfile = () => {
    // const [ idCharacter, setIdCharacter ] = useState(); 
    const dispatch = useDispatch();
    
    const { id } = useParams(); //pegando da url
    //setIdCharacter(idCharacter);
    console.log('id', id)

    useEffect(() => {
        console.log('dispatch');
        dispatch(getProfileRequest(id))
    }, [dispatch, id]);

    const { character }  = useSelector(state => state.characters);
    console.log('profile character = ', character);
    const { imageCharacter }  = useSelector(state => state.characters);

    // if (!character) {
    //     return load
    // }

    return (
        <div className='characterInfo'>
            <div className='divImagem'>
                <img 
                    className='image' 
                    src={imageCharacter.path + '.' + imageCharacter.extension} 
                    alt={imageCharacter.path + '.' + imageCharacter.extension} 
                    width='800' 
                />
            </div>
            <div className='description'>
                <span>{character.name}</span>
                <div>
                    <label htmlFor='Description'>Description</label>
                    <textarea 
                        id='Description' 
                        name='Description'
                        cols='50'
                        rows='10'
                        value={localStorage.getItem(character.name)}
                        // onChange={this.onChange}
                    />
                    {/* <button onClick={this.onSubmit}>Salvar</button> */}
                </div>
            </div>
        </div>
    )
};

export default CharacterProfile;