import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Link } from 'react-router-dom';
import { getCharactersRequest } from './charactersSlice';
import './Characters.style.css';
const Characters = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCharactersRequest())
    }, [dispatch])

    const { characters } = useSelector(state => state.characters);     
    const { count, limit, offset, total } = useSelector(state => state.characters.paging);     
    console.log('componente characters >>', characters);
    console.log('componente count >>', count);
    console.log('componente limit >>', limit);
    console.log('componente offset >>', offset);
    console.log('componente total >>', total);

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
                            {/* <Link to={`/characters/${character.id}`}>Acessar</Link>   */}
                        </div>              
                    </ul>
                ))}
            </div>
        </>
   )
};

export default Characters;