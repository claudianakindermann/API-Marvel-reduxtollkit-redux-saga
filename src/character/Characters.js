import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersRequest } from './charactersSlice';

const Characters = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getCharactersRequest())
    }, [dispatch])
      
    useSelector(state => console.log(state));

    return (
        <div>
            Olá
        </div>
    )
};

export default Characters;