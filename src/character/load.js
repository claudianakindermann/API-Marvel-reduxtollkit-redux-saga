import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import md5 from 'js-md5';
import './styles.css';

// const PRIVATE_KEY = "7cd3684824a067744989aa33c44a0fefb24a8740";
// const PUBLIC_KEY = "22e9bab7b462ebbd01fee470d5c30192";

const PRIVATE_KEY = "cb796e8ccec43ef98fce8ba6e70c078804694c23";
const PUBLIC_KEY = "91f9d48ee4dc7cd73e07a85c09a02d49";

export default class Main extends Component {
    state = {
        page: 0,
        totalCharacter: 0,
        elementosRestantes: 0,
        characters: [],
        pageAtual: 0
    };
    
   componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async (pageAtual = 0) => {        
        const timestamp = Number(new Date());
        const hash = md5.create();
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
    
        console.log('loadCharacters pageAtual1: ', pageAtual);

        const response = await api.get(`/v1/public/characters?ts=${timestamp}&orderBy=name&limit=60&offset=${pageAtual}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`);     
    
        const { count, limit, offset, results, total } = response.data.data;
    
        // console.log(response.data.data);
        // console.log(response.data.data.results);
    
        this.setState({ page: offset, totalCharacter: total.total, elementosRestantes: count.count, characters: results, pageAtual: pageAtual }); 
    
        console.log('loadCharacters pageAtual2: ', pageAtual)
        // console.log('clau-2 totalCharacter', total.total);
    };

    prevPage = () => {
        const { pageAtual } = this.state;
        console.log('pageAtual3: ', pageAtual)
     
        if (pageAtual === 0 ) return;

        const totalElements = pageAtual - 60;

        this.loadCharacters(totalElements);        
        console.log('pageAtual4: ', pageAtual)

    };

    nextPage = () => {
        const { totalCharacter, pageAtual } = this.state;
        console.log('pageAtual5: ', pageAtual)

        if (pageAtual > totalCharacter) return;        
        const totalElements = pageAtual + 60;       
     
        this.loadCharacters(totalElements);
        
        console.log('pageAtual6', pageAtual);

    };
    
    render() {
        const { characters, pageAtual } = this.state;
        console.log('pageAtual7', pageAtual);

        return (
            <>
                <div className='charactersList'>
                    {characters.map(character => (   
                        <ul className="charactersItem" key={character.id}>
                            <div className="divImage">
                                <img className="thumbnail-img" src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.thumbnail.path + '.' + character.thumbnail.extension} width="190" height="220" />
                            </div>
                            <div className="itemData">
                                <p><strong>{character.name}</strong></p> 
                                <Link to={`/characters/${character.id}`}>Acessar</Link>  
                            </div>              
                        </ul>
                    ))}
                </div>
                <div className="actions">
                    <button disabled={pageAtual === 0} onClick={this.prevPage()}>Anterior</button>
                    <button onClick={this.nextPage()}>Próxima</button>
                </div>
            </>
       )

    };
};

// disabled ={pageAtual >= totalCharacter}
