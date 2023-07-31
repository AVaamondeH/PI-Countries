export const validate = (ActivityData, durationData) => {
    
    const { name, difficulty, duration, season, countries} = ActivityData;
    const { hours, minutes } = durationData;
    
    const errors = {}

    if (!name.length) errors.name = "This field cannot be empty.";
    if (name.length <= 2) errors.name = "Name of activity must be greater than 2 letters.";
    if (name.length > 15) errors.name = "Name of activity to long.";
    if (!/^[A-Za-z\s]+$/.test(name)) errors.name = "This field is only for letters.";

    if (!difficulty.length) errors.difficulty = "This field cannot be empty.";
    if (difficulty.length < 3) errors.difficulty = "Difficulty must be greater than 2 letters.";
    if (difficulty.length > 10) errors.difficulty = "Name of difficulty to long.";
    if (!/^[A-Za-z\s]+$/.test(difficulty)) errors.difficulty = "This field is only for letters.";

    if (!duration.length) errors.duration = "This field cannot be empty.";
    if (!hours.length) errors.duration = "This field cannot be empty.";
    if (!minutes.length) errors.duration = "This field cannot be empty.";

    if (!season.length) errors.season = "This field cannot be empty.";

    if (!countries.length) errors.countries = "This field cannot be empty.";


    return errors
};