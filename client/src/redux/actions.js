import axios from "axios";

export const getCountries = (page) => {
   const endpoint = `http://localhost:3001/countries?page=${page}`;
   return async (dispatch) => {
      const { data } = await axios.get(endpoint)
      let { countriesData, totalData, enumeration} = data
      totalData = totalData / 10
         return dispatch({
            type: 'COUNTRIES',
            payload: { countriesData, totalData, enumeration},
         });
   };
};

export const filterAndOrder = (page, filters) => {
   const endpoint = `http://localhost:3001/countries?page=${page}`;
   const {continent, order, activity} = filters
   
   if (continent && order && !activity) {
      return async (dispatch) => {
         const { data } = await axios.get(`${endpoint}&continent=${continent}&order=${order}`)
         let { countriesData, totalData, enumeration} = data
         totalData = Math.ceil(totalData / 10)
         console.log(activity);
            return dispatch({
               type: 'FILTER_AND_ORDER',
               payload: { countriesData, totalData, enumeration},
            });
      };
   }

  if (continent && order && activity) {
   return async (dispatch) => {
      const { data } = await axios.get(`${endpoint}&continent=${continent}&order=${order}&activity=${activity}`)
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
   const endpoint = `http://localhost:3001/activities`;
   return async (dispatch) => {
      const { data } = await axios.get(endpoint)
         return dispatch({
            type: 'GET_ACTIVITIES',
            payload: data,
         });
   };
}

export const orderCards = (order) => {
   return {
      type: "ORDER",
      payload: order
   }
}

export const COUNTRIES = "COUNTRIES";
export const FILTER_AND_ORDER = "FILTER_AND_ORDER";
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const ORDER = "ORDER";



// if(continent && !order && !activity){
   //    return async (dispatch) => {
   //       const { data } = await axios.get(`${endpoint}&continent=${continent}`)
   //       let { countriesData, totalData, enumeration} = data
   //       totalData = Math.ceil(totalData / 10)
   //       console.log(totalData);
   //          return dispatch({
   //             type: 'FILTER_AND_ORDER',
   //             payload: { countriesData, totalData, enumeration},
   //          });
   //    };
   // }
   // if(!continent && order && !activity){
   //    return async (dispatch) => {
   //       const { data } = await axios.get(`${endpoint}&order=${order}`)
   //       let { countriesData, totalData, enumeration} = data
   //       totalData = Math.ceil(totalData / 10)
   //       console.log(totalData);
   //          return dispatch({
   //             type: 'FILTER_AND_ORDER',
   //             payload: { countriesData, totalData, enumeration},
   //          });
   //    };
   // }
   // if (!continent && !order && activity) {
   //    return async (dispatch) => {
   //       const { data } = await axios.get(`${endpoint}&activity=${activity}`)
   //       let { countriesData, totalData, enumeration} = data
   //       totalData = Math.ceil(totalData / 10)
   //          return dispatch({
   //             type: 'FILTER_AND_ORDER',
   //             payload: { countriesData, totalData, enumeration},
   //          });
   //    };
   // }
//   if (continent && !order && activity) {
//    return async (dispatch) => {
//       const { data } = await axios.get(`${endpoint}&continent=${continent}&activity=${activity}`)
//       let { countriesData, totalData, enumeration} = data
//       totalData = Math.ceil(totalData / 10)
//       console.log(totalData);
//          return dispatch({
//             type: 'FILTER_AND_ORDER',
//             payload: { countriesData, totalData, enumeration},
//          });
//    };
//   }
//   if (!continent && order && activity) {
//    return async (dispatch) => {
//       const { data } = await axios.get(`${endpoint}&order=${order}&activity=${activity}`)
//       let { countriesData, totalData, enumeration} = data
//       totalData = Math.ceil(totalData / 10)
//       console.log(totalData);
//          return dispatch({
//             type: 'FILTER_AND_ORDER',
//             payload: { countriesData, totalData, enumeration},
//          });
//    };
//   }











