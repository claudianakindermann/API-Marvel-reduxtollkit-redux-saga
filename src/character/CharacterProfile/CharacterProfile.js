import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getProfileRequest } from './../charactersSlice';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

import useStyles from './CharacterProfile.style.js';
import { 
    TextField, 
    Button, 
    Grid
 } from '@material-ui/core';


const schema = yup.object().shape({
    description: yup.string().required(),
  });

const CharacterProfile = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const { register, handleSubmit, errors, setValue} = useForm({
        resolver: yupResolver(schema)
    });
  
    const { id } = useParams(); //pegando da url
    const descriptionLocal = (localStorage.getItem(id))

    console.log('id', id)

    useEffect(() => {
        dispatch(getProfileRequest(id))
        if (!!descriptionLocal) {
            setValue('description', descriptionLocal)
        };        
    }, [dispatch, id, setValue, descriptionLocal], );

    const { character }  = useSelector(state => state.characters);
    console.log('profile character = ', character);
    console.log('profile character = ', character?.thumbnail?.path);

    const onSubmit = values => {
        localStorage.setItem(id, values.description)
    };

    return (
        <>
        <form className={classes.characterInfo} noValidate onSubmit={handleSubmit(onSubmit)}>     
            <Grid spacing={1} className={classes.content}>
                    <img className={classes.divImagem}
                        src={character?.thumbnail?.path + '.' + character?.thumbnail?.extension} 
                        alt={character?.thumbnail?.path + '.' + character?.thumbnail?.extension} 
                    />
                <Grid item xs={2} sm={4} className={classes.descriptionContent}>
                    <Grid className='abaProfile'>
                        <div>series</div>
                    </Grid>
                    <h1 classname={classes.titulo}>{character.name}</h1>
                    <TextField
                        inputRef={register}
                        errors={errors}
                        name='description'
                        id='description'
                        multiline={true}            
                        rows={15}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        required
                        label='Description'
                        size="small"
                        InputLabelProps={{shrink:true}}
                    />
                    <Button                        
                        className={classes.buttonSave}
                        type='submit'
                        variant='contained'                      
                        color='secundary'
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>  
        </form>
        
        </>
    )
};

export default CharacterProfile;