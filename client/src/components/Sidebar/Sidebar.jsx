import style from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterAndOrder, getActivities } from '../../redux/actions';
import {  useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Sidebar ({FiltersAndOrders, setCurrentPage, setFiltersAndOrders}) {

    const dispatch = useDispatch()
    const { activities } = useSelector(state => state)
    
    const handleClick = (event) => {
        const value = event.target.value;
        const name = event.target.name;
                setFiltersAndOrders({
                    ...FiltersAndOrders,
                    [name]: value
                });
        
        const page = setCurrentPage(1)
        dispatch(()=> filterAndOrder(page, {order: value}));
    }

    useEffect(() => {
        dispatch(getActivities())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return ( 
        <>
            <div className={style.container} >
                <div className={style.sidebar}>
                    <h3>Filter by:</h3>
                    <select name="continent" onChange={handleClick}>
                        <option value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <h3>Order by:</h3>
                    <select name="order" onChange={handleClick} >
                        <option value="asc">Ascendant</option>
                        <option value="dsc">Descendant</option>
                        <option value="Hpopu">Highest Population</option>
                        <option value="Lpopu">Lowest Population</option>
                    </select>
                    <h3>Activity:</h3>
                    <select name="activity" onChange={handleClick}>
                    <option value="" >None</option>
                    {activities.map(({id, name}) => {
                        return (

                            <option key={id} value={name}>{name}</option>
                        )
                    })}
                    </select>
                </div>
            </div>
        </> 
        );
}

export default Sidebar;