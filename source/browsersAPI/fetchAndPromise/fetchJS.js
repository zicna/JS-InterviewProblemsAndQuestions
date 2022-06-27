const baseURL = 'https://restcountries.com/v3.1/name/'

const getCountry = (country) => {
  fetch(`${baseURL}${country}`)
    .then((response) => {
      console.log(response)

      if (!response.ok) {
        // !terminate function same as return does
        // ! this ten returns rejected promise type and propagates down to the catch
        throw new Error(`Country not found ${response.status}`)
      }

      return response.json()
    })
    .then((data) => {
      const [countryObj] = data
      console.log(countryObj)
      const neighbour = countryObj.borders?.[0]
      console.log(neighbour)
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .then((response) => {
      console.log(response)

      if (!response.ok) {
        throw new Error(`neighbour not found ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      const [neighbourObj] = data
      console.log(neighbourObj)
    })
    .catch((error) => console.log(error.message))
    .finally(() => console.log('this is final'))
}
// getCountry('serbia')
getCountry('australia')
