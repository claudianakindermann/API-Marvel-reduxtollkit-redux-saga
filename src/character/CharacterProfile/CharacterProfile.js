import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { 
    getProfileRequest,
    getSeriesRequest 
} from './../charactersSlice';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

import useStyles from './CharacterProfile.style.js';
import { 
    TextField, 
    Button, 
    Grid
 } from '@material-ui/core';
 import EditIcon from '@material-ui/icons/Edit';
 import GridList from '@material-ui/core/GridList';
 import GridListTile from '@material-ui/core/GridListTile';
 import GridListTileBar from '@material-ui/core/GridListTileBar';
 import IconButton from '@material-ui/core/IconButton';
 import StarBorderIcon from '@material-ui/icons/StarBorder';

const schema = yup.object().shape({
    description: yup.string().required(),
  });

const CharacterProfile = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    
    const { register, handleSubmit, errors, setValue} = useForm({
        resolver: yupResolver(schema)
    });
  
    const { id } = useParams(); //pegando da url
    const descriptionLocal = (localStorage.getItem(id))

    useEffect(() => {
        dispatch(getProfileRequest(id))
        if (!!descriptionLocal) {
            setValue('description', descriptionLocal)
        };        
    }, [dispatch, id, setValue, descriptionLocal], );

    const { character }  = useSelector(state => state.characters);
    console.log('profile character = ', character);

    useEffect(() => {
        console.log('profile getSeriesRequest')
        dispatch(getSeriesRequest(id))
    }, [dispatch, id], );

    const { series } = useSelector(state => state.characters)
    console.log('profile series = ', series);

    const onSubmit = values => {
        localStorage.setItem(id, values.description)
    };

    const favoriteSeries = idSeries => {
        console.log('idseries salvar', idSeries)
        localStorage.setItem(idSeries, id)
    };

    console.log(character?.series?.items[0]?.name)
    console.log(character?.series?.items[0]?.resourceURI )
    return (
        <Grid content spacing={1} className={classes.detail}>
            <Grid content class={classes.titulo}>
                <h1 class={classes.h1}>{character.name}</h1>
                <EditIcon class={classes.edit} onClick={() => setShowForm(true)} > Edit </EditIcon>
            </Grid>
            <Grid content xs={12} spacing={1} className={classes.horizontal}>
                <Grid item xs={9} className={classes.image}>
                        <img
                            src={character?.thumbnail?.path + '.' + character?.thumbnail?.extension} 
                            alt={character?.thumbnail?.path + '.' + character?.thumbnail?.extension} 
                            width="790" 
                        />
                </Grid>
                {showForm ? (
                    <Grid item xs={3} className={classes.gridForm} >
                        <form className={classes.characterForm} noValidate onSubmit={handleSubmit(onSubmit)}>     
                                <Grid className={classes.descriptionContent}>
                                    <TextField
                                        inputRef={register}
                                        errors={errors}
                                        name='description'
                                        id='description'
                                        multiline={true}            
                                        rows={20}
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        label='Description'
                                        size='medium'
                                        InputLabelProps={{shrink:true}}
                                    />
                                    <Grid className={classes.gridButtons}>
                                        <Button                        
                                            className={classes.buttonSave}
                                            type='submit'
                                            variant='contained'                      
                                            color='secundary'
                                        >
                                            Save
                                        </Button>
                                        <Button                        
                                            className={classes.buttonSave}
                                            type='submit'
                                            variant='contained'                      
                                            color='secundary'
                                            onClick={() => setShowForm(false)}
                                            >
                                            Cancel
                                        </Button>
                                    </Grid>
                                </Grid>
                        </form>
                    </Grid>
                ) : (
                    <GridList  cellHeight={17} spacing={1}  className={classes.seriesList}>
                        {series.map(serie => (
                            <GridListTile key={serie.id} cols={1} rows={20} className={classes.serieItem}>
                                <img className={classes.serieImage}
                                    src={serie.thumbnail.path + '.' + serie.thumbnail.extension}
                                    alt={serie.thumbnail.path + '.' + serie.thumbnail.extension}
                                    width='190'
                                    height='230'
                                />
                                <GridListTileBar
                                    title={serie.title}
                                    titlePosition="top"
                                    actionIcon={
                                        <IconButton aria-label={`star ${serie.title}`} className={classes.iconSerie}>
                                        <StarBorderIcon onClick={() => favoriteSeries(serie.id)}/>
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                    className={classes.titleBar}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                )}
            </Grid>
        </Grid>
    )
};

export default CharacterProfile;