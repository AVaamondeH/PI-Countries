import style from './Home.module.css';
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
            <div className={style.home_container}>

                <div className={style.sidebar}>
                    <Sidebar
                        setFiltersAndOrders={setFiltersAndOrders}
                        setCurrentPage={setCurrentPage}
                        FiltersAndOrders={FiltersAndOrders}
                    />
                </div>
                <div className={style.cards_container}>
                    <Cards
                        currentPage={currentPage}
                        FiltersAndOrders={FiltersAndOrders}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </>
    );
}

export default Home ;

/** Se usan estados aca en el Home para pararlos por props a los componentes que los van a utilizar
 * entre si
 */
