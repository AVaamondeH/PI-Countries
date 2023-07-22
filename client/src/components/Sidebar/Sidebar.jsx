//import style from './Sidebar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterAndOrder, getActivities } from '../../redux/actions';
import {  useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Sidebar ({setCurrentPage, setFiltersAndOrders}) {

    const dispatch = useDispatch()
    const { activities } = useSelector(state => state)
    
    // const handleContinentFilter = (event) => {
    //     const value = event.target.value;
    //     setFiltersAndOrders(filters => ({
    //         ...filters,
    //         continent: value
    //     }));

    //     const page = setCurrentPage(1)
    //     dispatch(()=> filterAndOrder(page, {continent: value}));
    // }
    const handleOrder = (event) => {
        const value = event.target.value;
                setFiltersAndOrders(filters => ({
            ...filters,
            order: value
        }));
        
        const page = setCurrentPage(1)
        dispatch(()=> filterAndOrder(page, {order: value}));
    }

    const handleActivity = (event) => {
        const value = event.target.value;
                setFiltersAndOrders(filters => ({
            ...filters,
            activity: value
        }));
        const page = setCurrentPage(1)
        dispatch(()=> filterAndOrder(page, {activity: value}));
    }

    useEffect(() => {
        dispatch(getActivities())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return ( 
        <>
            <div>
                {/* <select name="continent" onChange={handleContinentFilter}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                </select> */}
                <select name="order" onChange={handleOrder} >
                    <option value="asc">Ascendente</option>
                    <option value="dsc">Descendente</option>
                </select>

                <select name="activity" onChange={handleActivity}>
                <option value="" >None</option>
                {activities.map(({id, name}) => {
                    return (

                        <option key={id} value={name}>{name}</option>
                    )
                })}
                </select>
            </div>
        </> 
        );
}

export default Sidebar;