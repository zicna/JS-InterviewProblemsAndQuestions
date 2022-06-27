const btn = document.querySelector('.btn-country')
const container = document.querySelector('.countries')
// *****************************************************
// * AJAX call using XMLHttpRequest

function ajaxCall(country) {
  const request = new XMLHttpRequest()

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`)

  request.send()

  request.addEventListener('load', function () {
    // console.log(this.responseText)
    const [data] = JSON.parse(this.responseText)
    console.log(data)

    // const html = `
    // <article class="country">
    //       <img class="country__img" src=${data.flag} />
    //       <div class="country__data">
    //         <h3 class="country__name">${data.name}</h3>
    //         <h4 class="country__region">${data.region}</h4>
    //         <p class="country__row"><span>👫</span>${(
    //           +data.population / 1000000
    //         ).toFixed(1)} people</p>
    //         // <p class="country__row"><span>🗣️</span>${data.languages}</p>
    //         // <p class="country__row"><span>💰</span>${data.currencies}</p>
    //       </div>
    //     </article>
    // `
    // container.insertAdjacentHTML('beforeend', html)
  })
}


