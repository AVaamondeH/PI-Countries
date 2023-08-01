import style from './Cards.module.css';
import Card from "../Card/Card";
import SearchBar from '../Searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { filterAndOrder } from '../../redux/actions';
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Cards ({currentPage, FiltersAndOrders, setCurrentPage}) {
    //console.log(selectedContinent);
    const { countries, totalPages, pageNumbers } = useSelector(state => state)
    const dispatch = useDispatch();
    //console.log(filteredCountries);
    useEffect(() => {
        // if(!filteredCountries.length) dispatch(getCountries(currentPage))
        dispatch(filterAndOrder(currentPage, FiltersAndOrders))
    }, [currentPage, dispatch, FiltersAndOrders])

    const handleNextPage = () => {
        setCurrentPage((Page) => Page + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((Page) => Page - 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };


    if(!countries.length) {
        return (
            <div>
                <h1>NO HAY NINGUNA ACTIVIDAD EN ESTE CONTINENTE</h1>
            </div>
        )
    }

    return ( 
    <> <div className={style.main_container}>
            <div className={style.searchbar}>
                <SearchBar/>
            </div>
            <div className={style.cards} >
                {countries.map(({id, name, flagImg, continent}) => {
                    return (
                    <Card
                    key={id}
                    id={id}
                    name ={name}
                    flagImg ={flagImg}
                    continent={continent}
                    />)
                })}
            </div>
            {totalPages > 1 && (
            <div className={style.pagination}>
            {/* Pagination buttons */}
                <button onClick={handleFirstPage} disabled={currentPage === 1}>
                    First Page
                </button>
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
                <button onClick={handleLastPage} disabled={currentPage === totalPages}>
                    Last Page
                </button>
            </div>
            )}

    </div>
    
    </>);
}

export default Cards ;