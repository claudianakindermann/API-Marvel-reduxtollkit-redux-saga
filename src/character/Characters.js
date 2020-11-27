import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { 
    getCharactersRequest,
    searchCharactersRequest
        } from './charactersSlice';

import './Characters.style.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Loading from './../components/Loading/Loading';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Characters = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm({});
    const [ searching, setSearching ] = useState(false);
    const [ parameter, setParameter ] = useState("");

    useEffect(() => {
      dispatch(getCharactersRequest({limit: 60, offset: 0}))
      setSearching(false);
    }, [dispatch]);

    const { characters, loading } = useSelector(state => state.characters);     
    const { total, page, limit } = useSelector(state => state.characters.paging);
    console.log('total=', total)
    console.log('limit=', limit)

    const nextPage = () => {
        if ((page + limit) >= total) return;        

        const offset = page + limit;
        
        if (searching) {
            dispatch(searchCharactersRequest({parameter, limit, offset}))
        } else {
            dispatch(getCharactersRequest({limit, offset}))
        }
    };

    const prevPage = () => {
        if (page === 0) return;
        
        const offset = page - limit;
        
        if (searching) {
            dispatch(searchCharactersRequest({parameter, limit, offset}))
        } else {
            dispatch(getCharactersRequest({limit, offset}))
        }
    };

    const onSubmit = (values) => {
        setParameter(values.search);
        if (!!values.search) {
            dispatch(searchCharactersRequest({ parameter: values.search, limit: 20, offset: 0}));
            setSearching(true);
        } else {
            dispatch(getCharactersRequest({limit: 60, offset: 0}))
        }
    }; 

    return (
        <Grid content className='charactersPage'>
            <Grid spacing={1} className="actions" >
                <Paper component="form" className="formSearch" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <InputBase
                        className="input"
                        placeholder="Search a character"
                        inputRef={register}
                        errors={errors}
                        id='search'
                        name='search'
                    />
                    <IconButton type="submit" className="searchButton" aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
                <Grid content className='actionsButtons'>
                    <ArrowBackIosIcon className="iconPagination" disabled={page === 0} onClick={prevPage}></ArrowBackIosIcon>
                    <ArrowForwardIosIcon className="iconPagination" disabled={(page + limit) >= total} onClick={nextPage}></ArrowForwardIosIcon>
                </Grid>
            </Grid>

            <Grid content className='charactersList'>
                {characters.map(character => (   
                    <Grid item xs={2} sm={2} className="charactersItem" key={character.id}>
                        <div className="divImage">
                            <img className="image"
                                src={character.thumbnail.path + '.' + character.thumbnail.extension} 
                                alt={character.thumbnail.path + '.' + character.thumbnail.extension} 
                                width="190" 
                                height="230" 
                            />
                        </div>
                        <div className="itemData">
                            <Link className="link" to={`/characters/${character.id}`}>{character.name}</Link>  
                        </div>              
                    </Grid>
                ))}
            </Grid>
            <Grid content className='actionsButtons'>                
                <ArrowBackIosIcon className="iconPagination" disabled={page === 0} onClick={prevPage}></ArrowBackIosIcon>
                <ArrowForwardIosIcon className="iconPagination" disabled={(page + limit) >= total} onClick={nextPage}></ArrowForwardIosIcon>
            </Grid>  
            <Loading loading={loading}/>       
        </Grid>
   )
};

export default Characters;
