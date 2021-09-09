import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}
// ***   ***   ***

export function getApod () {
  return request
    .get(`${serverURL}/apod`)
    .then(res => JSON.parse(res.body.text))
    .catch(err => console.log('oh no!', err.message))
}