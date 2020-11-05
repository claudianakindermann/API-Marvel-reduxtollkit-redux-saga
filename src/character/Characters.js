import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    getCharactersRequest,
    getCharactersPrev,
    getCharactersNext,
    saveSelectedCharacter
        } from './charactersSlice';
import './Characters.style.css';

const Characters = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCharactersRequest(0))
    }, [dispatch])

    const { characters } = useSelector(state => state.characters);     
    const { total, page } = useSelector(state => state.characters.paging);    

    const nextPage = () => {
        if (page >= total) return;        

        const offset = page + 60;       
        
        dispatch(getCharactersNext(offset))
    };

    const prevPage = () => {
        if (page === 0) return;
        
        const offset = page - 60;

        dispatch(getCharactersPrev(offset))
    };

    const saveCharacter = (character) => {
        console.log('save =', character);
        dispatch(saveSelectedCharacter(character))
    };

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
                            <Link onClick={() => saveCharacter(character)} to={`/characters/${character.id}`}>Acessar</Link>  
                        </div>              
                    </ul>
                ))}
                <div className='actions'>
                    <button onClick={prevPage}>Prev</button>
                    <button onClick={nextPage}>Next</button>  
                    {/* nextPage deve ser passado como referência! Sem () */}
                </div>
            </div>
        </>
   )
};

export default Characters;