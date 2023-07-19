import axios from "axios";


export const getCountries = () => {
   const endpoint = 'http://localhost:3001/countries';
   return async (dispatch) => {
      const { data } = await axios.get(endpoint)
         return dispatch({
            type: 'COUNTRIES',
            payload: data,
         });
   };
};

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      const { data } = await axios.delete(endpoint)
      console.log(data);
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
   };
};


export const filterCards = (gender) => {
   return {
      type: "FILTER",
      payload: gender
   }
}

export const orderCards = (order) => {
   return {
      type: "ORDER",
      payload: order
   }
}

export const COUNTRIES = "COUNTRIES";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER"
export const ORDER = "ORDER";















