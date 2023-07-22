import style from './Cards.module.css';
import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterAndOrder } from '../../redux/actions';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Cards ({currentPage, FiltersAndOrders, setCurrentPage}) {
    //console.log(selectedContinent);
    const { countries, totalPages, pageNumbers, filteredCountries } = useSelector(state => state)
    const dispatch = useDispatch();
    //console.log(filteredCountries);
    useEffect(() => {
        if(!filteredCountries.length) dispatch(getCountries(currentPage))
        dispatch(filterAndOrder(currentPage, FiltersAndOrders))
    }, [currentPage, dispatch, filteredCountries.length, FiltersAndOrders])

    useEffect(()=> {
        dispatch(getCountries(currentPage))
    }, )

    const handleNextPage = () => {
        setCurrentPage((Page) => Page + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((Page) => Page - 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };
    const countriesToRender = filteredCountries.length > 0 ? filteredCountries : countries;

    if(!filteredCountries.length) {
        return (
            <div>
                <h1>NO HAY NINGUNA ACTIVIDAD EN ESTE CONTINENTE</h1>
            </div>
        )
    }

    return ( 
    <>
    <div className={style.cards} >
        {countriesToRender.map(({id, name, flagImg, continent}) => {
            return (
            <Card
            key={id}
            name ={name}
            flagImg ={flagImg}
            continent={continent} 
            />)
        })}

                {/* Pagination buttons */}
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
        </button>
                {/* Enumeration buttons */}
        {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    disabled={currentPage === page}
                >
                    {page}
                </button>
            ))}
                {/* Enumeration buttons */}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
        </button>
    </div>
    
    </>);
}

export default Cards ;