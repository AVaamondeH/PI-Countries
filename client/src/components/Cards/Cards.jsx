import style from './Cards.module.css';
import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { useEffect } from "react";

function Cards () {
const { countries } = useSelector(state => state)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getCountries())
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return ( 
    <>
    <div className={style.cards} >
        {countries.map(({id, name, flagImg, continent}) => {
            return (
            <Card
            key={id}
            name ={name}
            flagImg ={flagImg}
            continent={continent} 
            />)
        })}
    </div>
    
    </>);
}

export default Cards ;