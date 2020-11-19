import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { 
    getCharactersRequest,
    getCharactersPrev,
    getCharactersNext
        } from './charactersSlice';
import './Characters.style.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Loading from './../components/Loading/Loading';
import { TextField, Button, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Characters = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, errors, setValue } = useForm({});

    useEffect(() => {
      dispatch(getCharactersRequest(0))
    }, [dispatch]);

    const { characters, loading } = useSelector(state => state.characters);     
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

    const onSubmit = {

    }; 

    return (
        <Grid content className='charactersPage'>
            {/* <form className="formSearch" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid className="actionsSearch" >
                    <TextField
                        inputRef={register}
                        errors={errors}
                        name='Search'
                        variant="filled"
                        margin="normal"
                        id='search'
                        label='search'
                        size="small"
                        InputLabelProps={{shrink:true}}
                    />
                </Grid>
                <Grid className='actionsButtons'>
                    <ArrowBackIosIcon className="iconPagination" disabled={page === 0} onClick={prevPage}></ArrowBackIosIcon>
                    <ArrowForwardIosIcon className="iconPagination" disabled={page >= total} onClick={nextPage}></ArrowForwardIosIcon>
                </Grid>
            </form> */}
            <Grid spacing={1} className="actions" >
                <Paper component="form" className="formSearch">
                    <InputBase
                        className="input"
                        placeholder="Search a character"
                        inputRef={register}
                        errors={errors}
                        id='search'

                    />
                    <IconButton type="submit" className="searchButton" aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
                <Grid className='actionsButtons'>
                    <ArrowBackIosIcon className="iconPagination" disabled={page === 0} onClick={prevPage}></ArrowBackIosIcon>
                    <ArrowForwardIosIcon className="iconPagination" disabled={page >= total} onClick={nextPage}></ArrowForwardIosIcon>
                </Grid>
            </Grid>



            <Grid spacing={1} className='charactersList'>
                {characters.map(character => (   
                    <Grid item xs={2} className="charactersItem" key={character.id}>
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
            <Grid className='actionsButtons'>                
                <ArrowBackIosIcon className="iconPagination" disabled={page === 0} onClick={prevPage}></ArrowBackIosIcon>
                <ArrowForwardIosIcon className="iconPagination" disabled={page >= total} onClick={nextPage}></ArrowForwardIosIcon>
                {/* <button disabled={page === 0} onClick={prevPage}>Prev</button>
                <button disabled={page >= total} onClick={nextPage}>Next</button>   */}
            </Grid>  
            <Loading loading={loading}/>       
        </Grid>
   )
};


export default Characters;
