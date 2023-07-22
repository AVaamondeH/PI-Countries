// import style from './Home.module.css';
import { useState } from 'react';
import Cards from "../Cards/Cards";
import Sidebar from "../Sidebar/Sidebar";

function Home () {
    const [currentPage, setCurrentPage] = useState(1);
    const [FiltersAndOrders, setFiltersAndOrders] = useState({
        continent: "All",
        order:"asc",
        activity:""});

    return ( 
        <>
            <Sidebar
                setFiltersAndOrders={setFiltersAndOrders}
                setCurrentPage={setCurrentPage}
            />
            <Cards
                currentPage={currentPage}
                FiltersAndOrders={FiltersAndOrders}
                setCurrentPage={setCurrentPage}
            /> 
        </>
    );
}

export default Home ;

/** Se usan estados aca en el Home para pararlos por props a los componentes que los van a utilizar
 * entre si
 */
