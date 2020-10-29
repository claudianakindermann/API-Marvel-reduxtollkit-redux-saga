import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharactersRequest } from './charactersSlice';
import './Characters.style.css';

const CharactersList = ({ characters, page, total}) => {
    const dispatch = useDispatch()
    const [ totalElements, setTotalElements ] = useState(0);

    // const { characters } = useSelector(state => state.characters);     
    // const { count, limit, offset, total, page } = useSelector(state => state.characters.paging);    
    console.log('list characters >>', characters);
    // console.log('list count >>', count);
    // console.log('list limit >>', limit);
    // console.log('list offset >>', offset);
    console.log('list total >>', total);

    const nextPage = () => {
        // setPageAtual(0);
        // const { totalCharacter, pageAtual } = this.state;
        console.log('nextPage page: ', page)

        if (page > total) return;        
        // const totalElements = page + 60;       
        setTotalElements(page + 60);
        console.log('nextPage totalElements: ', totalElements)
        dispatch(getCharactersRequest(totalElements))
    }

    return (
        <>
            <div className='charactersList'>
                {characters.map(character => (   
                    <ul className="charactersItem" key={character.id}>
                        <div className="divImage">
                            <img 
                                className="thumbnail-img" 
                                src={character.thumbnail.path + '.' + character.thumbnail.extension} 
                                alt={character.thumbnail.path + '.' + character.thumbnail.extension} 
                                width="190" 
                                height="230" 
                            />
                        </div>
                        <div className="itemData">
                            <p><strong>{character.name}</strong></p> 
                            <Link to={`/characters/${character.id}`}>Acessar</Link>  
                        </div>              
                    </ul>
                ))}
                <div className='actions'>
                    <button onClick={nextPage()}>Próxima</button>
                </div>
            </div>
        </>
   )
};

export default CharactersList;