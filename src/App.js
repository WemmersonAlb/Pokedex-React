import CardPokemon from './components/CardPokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <img
        alt="Official Pokemon Logo"
        className="Imagem"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
      />

      <div className='pokedexFlex'>
          <CardPokemon
          className='CardPokemon'
          numero='#001'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
          nome='Bulbasaur'
          tipo='Grass and poison'
          categoria='Seed'
          fraqueza='Fire, psychic, flying and ice'
          skill='Overgrow'
          cor='grass'/>

          <CardPokemon
          className='CardPokemon'
          numero='#002'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
          nome='Ivysaur'
          tipo='Grass and poison'
          categoria='Seed'
          fraqueza='Fire, psychic, flying and ice'
          skill='Overgrow'
          cor='grass'/>

          <CardPokemon
          className='CardPokemon'
          numero='#003'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
          nome='Venusaur'
          tipo='Grass and poison'
          categoria='Seed'
          fraqueza='Fire, psychic, flying and ice'
          skill='Overgrow'
          cor='grass'/>

          <CardPokemon
          className='CardPokemon'
          numero='#004'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
          nome='Charmander'
          tipo='Fire'
          categoria='Lizard'
          fraqueza='Water, ground and rock'
          skill='Blaze'
          cor='fire'/>

          <CardPokemon
          className='CardPokemon'
          numero='#005'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
          nome='Charmeleon'
          tipo='Fire'
          categoria='Lizard'
          fraqueza='Water, ground and rock'
          skill='Blaze'
          cor='fire'/>

          <CardPokemon
          className='CardPokemon'
          numero='#006'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
          nome='Charizard'
          tipo='Fire and flying'
          categoria='Lizard'
          fraqueza='Water, ground and rock'
          skill='Blaze'
          cor='fire'/>

          <CardPokemon
          className='CardPokemon'
          numero='#007'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
          nome='Squirtle'
          tipo='Water'
          categoria='Tiny turtle'
          fraqueza='Grass and eletric'
          skill='Torrent'
          cor='water'/>

          <CardPokemon
          className='CardPokemon'
          numero='#008'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
          nome='Wartortle'
          tipo='Water'
          categoria='Turtle'
          fraqueza='Grass and eletric'
          skill='Torrent'
          cor='water'/>

          <CardPokemon
          className='CardPokemon'
          numero='#009'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
          nome='Blastoise'
          tipo='Water'
          categoria='Shellfish'
          fraqueza='Grass and eletric'
          skill='Torrent'
          cor='water'/>

          <CardPokemon
          className='CardPokemon'
          numero='#010'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'
          nome='Caterpie'
          tipo='Bug'
          categoria='Worm'
          fraqueza='Fire, flying and rock'
          skill='Shield dust'
          cor='bug'/>

          <CardPokemon
          className='CardPokemon'
          numero='#011'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'
          nome='Metapod'
          tipo='Bug'
          categoria='Cocoon'
          fraqueza='Fire, flying and rock'
          skill='Shed skin'
          cor='bug'/>

          <CardPokemon
          className='CardPokemon'
          numero='#012'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
          nome='Butterfree'
          tipo='Bug and flying'
          categoria='Butterfly'
          fraqueza='Fire, flying, eletric, ice and rock'
          skill='Compound eyes'
          cor='bug'/>

          <CardPokemon
          className='CardPokemon'
          numero='#013'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png'
          nome='Weedle'
          tipo='Bug and poison'
          categoria='Hairy bug'
          fraqueza='Fire, psychic, flying and rock'
          skill='Shield dust'
          cor='bug'/>

          <CardPokemon
          className='CardPokemon'
          numero='#014'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'
          nome='Kakuna'
          tipo='Cocoon'
          categoria='Hairy bug'
          fraqueza='Fire, psychic, flying and rock'
          skill='Shed skin'
          cor='bug'/>

          <CardPokemon
          className='CardPokemon'
          numero='#015'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'
          nome='Beedrill'
          tipo='Bug and poison'
          categoria='Poison bee'
          fraqueza='Fire, psychic, flying and rock'
          skill='Swarm'
          cor='bug'/>

          <CardPokemon
          className='CardPokemon'
          numero='#016'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
          nome='Pidgey'
          tipo='Normal and Flying'
          categoria='Tiny bird'
          fraqueza='Eletric, ice and rock'
          skill='Keen eye and Tangled feet'
          cor='flying'/>

          <CardPokemon
          className='CardPokemon'
          numero='#017'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png'
          nome='Pidgeotto'
          tipo='Normal and Flying'
          categoria='Bird'
          fraqueza='Eletric, ice and rock'
          skill='Keen eye and Tangled feet'
          cor='flying'/>

          <CardPokemon
          className='CardPokemon'
          numero='#018'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png'
          nome='Pidgeot'
          tipo='Normal and Flying'
          categoria='Tiny bird'
          fraqueza='Eletric, ice and rock'
          skill='Keen eye and Tangled feet'
          cor='flying'/>

          <CardPokemon
          className='CardPokemon'
          numero='#019'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
          nome='Rattata'
          tipo='Normal'
          categoria='Mouse'
          fraqueza='Fighting'
          skill='Run way and Guts'
          cor='normal'/>

          <CardPokemon
          className='CardPokemon'
          numero='#020'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png'
          nome='Raticate'
          tipo='Normal'
          categoria='Mouse'
          fraqueza='Fighting'
          skill='Run way and Guts'
          cor='normal'/>

          <CardPokemon
          className='CardPokemon'
          numero='#021'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png'
          nome='Spearow'
          tipo='Normal and Flying'
          categoria='Tiny bird'
          fraqueza='Eletric, ice and rock'
          skill='Keen eye'
          cor='flying'/>

          <CardPokemon
          className='CardPokemon'
          numero='#022'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png'
          nome='Fearow'
          tipo='Normal and Flying'
          categoria='Beak'
          fraqueza='Eletric, ice and rock'
          skill='Keen eye'
          cor='flying'/>

          <CardPokemon
          className='CardPokemon'
          numero='#023'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png'
          nome='Ekans'
          tipo='Poison'
          categoria='Snake'
          fraqueza='Psychic and ground'
          skill='Shed skin and Intimidate'
          cor='poison'/>

          <CardPokemon
          className='CardPokemon'
          numero='#024'
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
          nome='Arbok'
          tipo='Poison'
          categoria='Cobra'
          fraqueza='Psychic and ground'
          skill='Shed skin and Intimidate'
          cor='poison'/>


          <CardPokemon
          className='CardPokemon'
          numero="#025"
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
          nome='Pikachu'
          tipo='Eletric'
          categoria='Mouse'
          fraqueza='Ground'
          skill='Static'
          cor='eletric'/>

          <CardPokemon
          className='CardPokemon'
          numero="#026"
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
          nome='Raichu'
          tipo='Eletric'
          categoria='Mouse'
          fraqueza='Ground'
          skill='Static'
          cor='eletric'/>

          <CardPokemon
          className='CardPokemon'
          numero="#027"
          imagem='https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png'
          nome='Sandshrew'
          tipo='Ground'
          categoria='Mouse'
          fraqueza='CWater, grass and ice'
          skill='Sand veil'
          cor='ground'/>







      </div>
      <footer>
          <h2>by Wemmerson Albuquerque - 2023</h2>
      </footer>

    </div>
  );
}

export default App;
