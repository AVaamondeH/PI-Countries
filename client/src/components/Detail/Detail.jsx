import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const [country, setCountry] = useState({});

    
    const getDetail = async (id) => {
        const { data } = await axios(`http://127.0.0.1:3001/countries/${id}`)
        console.log(data);
            
            if (!data.name) {
                return setCountry({});
            }               
            
            setCountry(data);                     
        }
    useEffect( () => {

            getDetail(id)
        }, [id]);
        console.log(country);

        return (
          <div className={style.container}>
            <div className={style.details}>
              <div className={style.img_container}>
                <img src={country?.flagImg} alt="" className={style.img} />
              </div>
              <div className={style.text_container}>
                <h3 className={style.name}>{country?.name}</h3>
                <h3>Continent: {country?.continent}</h3>
                <h3>Capital: {country?.capital}</h3>
                <h3>Subregion: {country?.subregion}</h3>
                <h3>Area: {country?.area}</h3>
                <h3>Population: {country?.population}</h3>
              </div>
            </div>
            <div>
              {country?.Activities ? (
                <div className={style.activities_container}>
                  {country?.Activities.map(({ id, name, difficulty, duration, season }) => (
                    <div key={id} className={style.activity_card}>
                      <h3 className={style.activity_name}>{name}</h3>
                      <div className={style.activity_detail}>
                        <p>Difficulty: {difficulty}</p>
                        <p>Duration: {duration}</p>
                        <p>Season: {season}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={style.no_activities_message}>
                  <h3>This country does not have activities</h3>
                </div>
                )}
              </div>
            </div>
        );
      };

export default Detail;