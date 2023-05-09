import styles from './CardPokemon.module.css';

export default function({nome, imagem, tipo, categoria, fraqueza, skill, cor, numero}){
    let classe = '';
    switch (cor){
        case "steel":
            classe = styles.stell;
            break;
        case "rock":
            classe = styles.rock;
            break;
        case "psychic":
            classe = styles.psychic;
            break;
        case "poison":
            classe = styles.poison;
            break;
        case "normal":
            classe = styles.normal;
            break;
        case "ice":
            classe = styles.ice;
            break;
        case "ground":
            classe = styles.ground;
            break;
        case "ghost":
            classe = styles.ghost;
            break;
        case "flying":
            classe = styles.flying;
            break;
        case "fighting":
            classe = styles.fighting;
            break;
        case "fairy":
            classe = styles.fairy;
            break;
        case "dragon":
            classe = styles.dragon;
            break;
        case "bug":
            classe = styles.bug;
            break;
        case "dark":
            classe = styles.dark;
            break;
        case "eletric":
            classe = styles.eletric;
            break;
        case 'fire':
            classe = styles.fire;
            break;
        case 'water':
            classe = styles.water;
            break;
        case 'grass':
            classe = styles.grass;
            break;
        default:
            classe = '';
            break;
    }
    return <div className={styles.flexPai+" "+classe}>
        <div className={styles.flexFilho}>
            <img alt={nome} src={imagem} className={styles.pokemonImg}/>
        </div>
        <div className={styles.flexFilho}>
            <h2 className= {styles.numero}>{numero}</h2>
            <h2>{nome}</h2>
            <p>Type: {tipo}</p>
            <p>Category: {categoria}</p>
            <p>Weakness: {fraqueza}</p>
            <p>Abilities: {skill}</p>
        </div>
    </div>
}