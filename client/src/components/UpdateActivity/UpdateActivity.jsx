import style from './UpdateActivity.module.css';
import { useState, useEffect } from 'react';
import { validate } from "../Form/validations"
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getAllCountries } from '../../redux/actions';
import axios from 'axios';

const UpdateActivity = () => {

  const dispatch = useDispatch()
  const { activities, allCountries } = useSelector(state => state)
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  });
  const [duration, setDuration] = useState({
    hours: "",
    minutes: ""
  })
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errors, setErrors] = useState({});

  // ! UseEffects
  useEffect(() => {
    dispatch(getActivities())
    dispatch(getAllCountries())
  }, [dispatch]);

  useEffect(() => {
    // Actualizar el estado de 'activity' cada vez que 'duration' cambie
    const updatedActivity = {
      ...activity,
      duration: duration.hours.padStart(2, '0') + ":" + duration.minutes.padStart(2, '0'),
    };

    setActivity(updatedActivity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  useEffect(() => {
    // Actualizar el estado de 'activity' cada vez que 'selectedCountries' cambie
    const updatedActivity = {
      ...activity,
      countries: selectedCountries.map(countryId => countryId.id)
    };

    setActivity(updatedActivity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountries]);

  // ! Handlers
  const handleCountryChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const addCountry = (country) => {
    setSelectedCountries([...selectedCountries, country]);
    setSearchText("");
  };

  const removeCountry = (country) => {
    setSelectedCountries(selectedCountries.filter((c) => c.id !== country.id));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivity({
      ...activity,
      [name]: value,
    });
    validations()
  };

  const handleDuration = (event) => {
    const { name, value } = event.target;
    setDuration({
      ...duration,
      [name]: value
    })
    validations()
  };

  const onInput = (event) => {
    let { value, name } = event.target
    if (name === "hours" && value > 72) value = 72
    if (name === "minutes" && value > 59) value = 59
    if (value.length > 2) value = value.slice(0, 2);
    event.target.value = value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos al backend mediante una solicitud POST
    // Por ejemplo:

    axios.post('http://127.0.0.1:3001/activities', activity)
      .then((response) => {
        console.log('Activity created successfully:', response.data);
        // Puedes realizar alguna acción adicional aquí, como redirigir a otra página
      })
      .catch((error) => {
        console.error('Error creating activity:', error);
      });
  };

  const validations = () => {
    const error = validate(activity, duration)
    setErrors(error)

    if (!Object.keys(error).length) { //se verifica si el error tiene o no propiedades para proceder a setear nuevamente el error en un objeto vacio

      setErrors({});
    }
  }

  // * Render
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form_container}>
        <h2>Update an activity!</h2>
        <p>Fields with * cannot be empty</p>
        <select name="activity" className={style.select_activity}>
          <option value="" disabled>Select an activity to update</option>
          {activities.map(({ id, name }) => {
            return (

              <option key={id} value={name}>{name}</option>
            )
          })}
        </select>

        <label>
          Name: *
          <input
            name='name'
            type="text"
            value={activity.name}
            onChange={handleChange}
          />
          <div className={style.error_container}>
            {errors.name && <p>{errors.name}</p>}
          </div>
        </label>
        <br />
        <label className={style.label}>Difficulty: *
          <select
            className={style.input}
            type="number"
            name="difficulty"
            value={activity.difficulty}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select difficulty
            </option>
            <option value="1">⭐ ✰ ✰ ✰ ✰</option>
            <option value="2">⭐⭐ ✰ ✰ ✰</option>
            <option value="3">⭐⭐⭐ ✰ ✰</option>
            <option value="4">⭐⭐⭐⭐ ✰</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
          <div className={style.error_container}>
            {errors.difficulty && <p>{errors.difficulty}</p>}
          </div>
        </label>
        <br />
        <label className={style.duration_input}>
          Duration (HH:mm): *
          <input
            type="number"
            name="hours"
            size={2}
            min={0}
            value={duration.hours}
            onChange={handleDuration}
            onInput={onInput}
            placeholder='00' />
          :
          <input
            type="number"
            name="minutes"
            size={2}
            min={0}
            value={duration.minutes}
            onChange={handleDuration}
            onInput={onInput}
            placeholder='00' />
          <br />
          <div className={style.error_container}>
            {errors.duration && <p>{errors.duration}</p>}
          </div>
        </label>
        <br />
        <label>
          Season: *
          <select
            name="season"
            value={activity.season}
            onChange={handleChange}
          >
            <option value="" disabled>Select a season</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
          <div className={style.error_container}>
            {errors.season && <p>{errors.season}</p>}
          </div>
        </label>
        <br />
        <label>
          Select countries:
          <input
            type="text"
            value={searchText}
            onChange={handleCountryChange}
            placeholder="Search for a country"
          />
          {searchText.length > 0 && ( // Aquí agregamos la condición para mostrar la lista
            <ul className={style.results}>
              {allCountries.filter((country) =>
                country.name.toLowerCase().includes(searchText.toLowerCase())
              )
                .map((country) => (
                  <li key={country.id}>
                    <img src={country.flagImg} alt={country.name} />
                    {country.name}
                    <div className={style.buttonDiv}>
                      {selectedCountries.some((countr) => countr.id === country.id) ? (
                        <button type="button" onClick={() => removeCountry(country)}>
                          Remove
                        </button>
                      ) : (
                        <button type="button" onClick={() => addCountry(country)}>
                          Add
                        </button>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          )}
          <div className={style.error_container}>
            {errors.countries && <p>{errors.countries}</p>}
          </div>
        </label>
        <br />
        <div className={style.selectedCountriesText}>
          <label >Selected countries: *</label>
        </div>
        {/* Texto "Selected Countries" solo si no hay países seleccionados */}
        {selectedCountries.length === 0 && (
          <div className={style.selected_countries}>
          </div>
        )}
        {selectedCountries.length > 0 &&
          (console.log(selectedCountries),
            <div className={style.selected_countries}>
              {selectedCountries.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => removeCountry(country)}
                >
                  <span>
                    {country.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        <br />
        {console.log(errors)}
        <button
          type="submit"
          disabled={
            !activity.name ||
            !activity.difficulty ||
            !activity.season ||
            !activity.countries.length ||
            !duration.hours ||
            !duration.minutes ||
            errors.name ||
            errors.difficulty ||
            errors.season ||
            errors.countries ||
            errors.duration
          }>Create Activity</button>
      </form>
    </div>
  );
};


export default UpdateActivity;