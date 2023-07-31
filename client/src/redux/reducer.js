import {  FILTER_AND_ORDER, GET_ACTIVITIES, GET_DETAILS } from "./actions"

const initialState = {
    countries: [],
    totalPages: 0,
    pageNumbers: [],
    filteredCountries: [],
    activities:[],
    //allCharacter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FILTER_AND_ORDER:
            return {
                ...state, 
                countries: action.payload.countriesData,
                totalPages: action.payload.totalData,
                pageNumbers: action.payload.enumeration,
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };

    //         case ORDER_BY_COUNTRY:
    //   const countriesOrdered = state.countriesCopy.sort((a, b) => {
    //     return actions.payload === "A" ? a.name - b.name : b.name - a.name;
    //   });
    //   return {
    //     ...state,
    //     countriesCopy: countriesOrdered,
    //   };
        
        
        case GET_DETAILS:            
            // if (action.payload === "A") {
            //     result = state.allCharacter.sort((a, b) => a.id - b.id);
            // } 
            // if(action.payload === "D") {
            //     result = state.allCharacter.sort((a, b) => b.id - a.id);
            // }
            return {
                ...state,
                myFavorites: 
                action.payload === "A"
                ? state.allCharacter.sort((a, b) => a.id - b.id)
                : state.allCharacter.sort((a, b) => b.id - a.id)
                            

            }
            
    
        default:
            return {...state}
    }
}

export default reducer;







