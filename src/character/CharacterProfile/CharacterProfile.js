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
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
 } from '@material-ui/core';
 import EditIcon from '@material-ui/icons/Edit';
 import StarBorderIcon from '@material-ui/icons/StarBorder';

const schema = yup.object().shape({
    description: yup.string().required(),
  });

const CharacterProfile = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    const [descriptionLocal, setDescriptionLocal] = useState();
    
    const { register, handleSubmit, errors, setValue} = useForm({
        resolver: yupResolver(schema)
    });
  
    const { id } = useParams(); //pegando da url

    useEffect(() => {
        dispatch(getProfileRequest(id))
    }, [dispatch, id], );

    const { character }  = useSelector(state => state.characters);

    useEffect(() => {
        const desc = localStorage.getItem(id);
        if (!!desc) {
            setDescriptionLocal(localStorage.getItem(id))
        } else {
            setDescriptionLocal(character?.description)
        };
        if (!!descriptionLocal && showForm) {
            setValue('description', descriptionLocal)
        };        
    }, [character, showForm, id, setValue, descriptionLocal],);   
 
    useEffect(() => {
        dispatch(getSeriesRequest(id))
    }, [dispatch, id], );

    const { series } = useSelector(state => state.characters)

    const onSubmit = values => {
        localStorage.setItem(id, values.description)
    };

    const favoriteSeries = idSeries => {
        localStorage.setItem(idSeries, id) //clau pendente
    };

    return (
        <div className={classes.divDetail}>
            <div class={classes.titulo}>
                <h1 class={classes.h1}>{character.name}
                    <EditIcon class={classes.edit} onClick={() => setShowForm(true)} > Edit </EditIcon>
                </h1>
            </div>
            <Grid container spacing={2} className={classes.gridHorizontal}>
                <Grid item xs={6} className={classes.divImageCharacter}>
                    <img className={classes.imageCharacter}
                        src={character?.thumbnail?.path + '.' + character?.thumbnail?.extension} 
                        alt={character?.thumbnail?.path + '.' + character?.thumbnail?.extension} 
                    />
                </Grid>
                {showForm ? (
                    <Grid item xs={3} className={classes.gridForm} >
                        <form className={classes.characterForm} noValidate onSubmit={handleSubmit(onSubmit)}>     
                                <div className={classes.descriptionContent}>
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
                                        placeholder='Enter the description of the character'
                                    />
                                    <div className={classes.divButtons}>
                                        <Button                        
                                            className={classes.buttonSave}
                                            type='submit'
                                            variant='contained'                      
                                            onClick={() => setShowForm(false)}
                                            >
                                            Cancel
                                        </Button>
                                        <Button                        
                                            className={classes.buttonSave}
                                            type='submit'
                                            variant='contained'                      
                                            color='primary'
                                            onClick={() => alert('Description saved successfully!')}  //Clau pendente  
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                        </form>
                    </Grid>
                ) : (
                    <Grid item xs={4}  className={classes.seriesList}>
                        <div className={classes.divGridList}>
                            <GridList cellHeight={20} spacing={2} className={classes.gridList}>
                                {series.map(serie => (
                                    <GridListTile key={serie.id} cols={1} rows={20} className={classes.serieItem}>
                                        <img className={classes.serieImage}
                                            src={serie.thumbnail.path + '.' + serie.thumbnail.extension}
                                            alt={serie.thumbnail.path + '.' + serie.thumbnail.extension}
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
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
};

export default CharacterProfile;