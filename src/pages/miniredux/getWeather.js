import { weatherGetData } from './reducers/weather'
function getWeather(dispatch, getState, extraArgs) {
  console.log('state', getState())
  console.log('extraArgs', extraArgs)

  new Promise((res, rej) => {
    setTimeout(() => {
      res({
        data: {
          location: 'wuhan',
          condition: 'cloudy',
        },
      })
    }, 2000)
  }).then(({ data }) => {
    dispatch({
      type: weatherGetData,
      payload: data,
    })
  })
}

export default getWeather
