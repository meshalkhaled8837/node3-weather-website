const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f8e9154b8378d14b457ac2823a1ba976&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    // DESTRUCTURING RESPONSE
    if (error) {
      callback("Internet connection failed!", undefined);
    } else if (body.error) {
      callback("Cannot find location!", undefined);
    } else {
      callback(
        undefined,
        `Mostly ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} and it feels ${body.current.feelslike} `
      );
    }
  });
};

module.exports = forecast;
