import style from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card ({ name, flagImg, continent }) {
    return ( 
    <>
    <div className={style.card}>
        <img src={flagImg} alt="Flag" />
        <h3>{name}</h3>
        <p>{continent}</p>
    </div>
    </> );
}

export default Card ;