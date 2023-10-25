import axios from "axios";
import { endpoint } from "../utils/endpoint";

export const getAllCountries = () => {
   return async (dispatch) => {
      const { data } = await axios.get(`${endpoint}/countries`)
         return dispatch({
            type: 'GET_ALL_COUNTRIES',
            payload: data.data,
         });
   };
}

export const filterAndOrder = (page, filters) => {
   const endpoint_page = `${endpoint}/countries?page=${page}`;
   const {continent, order, activity} = filters
   
   if (continent && order && !activity) {
      return async (dispatch) => {
         const { data } = await axios.get(`${endpoint_page}&continent=${continent}&order=${order}`)
         let { countriesData, totalData, enumeration} = data
         totalData = Math.ceil(totalData / 10)
            return dispatch({
               type: 'FILTER_AND_ORDER',
               payload: { countriesData, totalData, enumeration},
            });
      };
   }

   if (continent && order && activity) {
      return async (dispatch) => {
         const { data } = await axios.get(`${endpoint_page}&continent=${continent}&order=${order}&activity=${activity}`)
         if(!Object.keys(data).length) {
            return dispatch({
               type: 'FILTER_AND_ORDER',
               payload: { countriesData: [], 
                  totalData: 0, 
                  enumeration: []},
            });
         }
         let { countriesData, totalData, enumeration} = data   
         totalData = Math.ceil(totalData / 10)
            return dispatch({
               type: 'FILTER_AND_ORDER',
               payload: { countriesData, totalData, enumeration},
            });
      };
   }


};

export const getActivities = () => {
   const endpoint_data = `${endpoint}/activities`;
   return async (dispatch) => {
      const { data } = await axios.get(endpoint_data)
         return dispatch({
            type: 'GET_ACTIVITIES',
            payload: data.data,
         });
   };
}

export const getAssociations = () => {
   const endpoint_data = `${endpoint}/associations`;
   return async (dispatch) => {
      const { data } = await axios.get(endpoint_data)
         return dispatch({
            type: 'GET_ASSOCIATIONS',
            payload: data.data,
         });
   };
}

export const updateFilters = (filters) => {
   return {
      type: 'UPDATE_FILTERS',
      payload: filters,
   };
};

export const setCurrentPage = (filters) => {
   return {
      type: 'CURRENT_PAGE',
      payload: filters,
   };
};

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const FILTER_AND_ORDER = "FILTER_AND_ORDER";
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const GET_ASSOCIATIONS = "GET_ASSOCIATIONS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const CURRENT_PAGE = "CURRENT_PAGE";
