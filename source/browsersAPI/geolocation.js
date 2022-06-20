const map = document.getElementById("map");

if (navigator.geolocation) console.dir(navigator.geolocation)
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords
    console.log(`https://www.google.com/maps/@${latitude},${longitude}z`)
    // L global variable form leaflet we added in our script that we can use in all our files
    // ! any variable that is global in any script will be avaiable to all our scripts as long as we try to access it after that script was loaded
    const coors = [latitude, longitude]
    const map = L.map('map').setView(coors, 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker(coors)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup()
  },
  function () {
    alert('could not get your position')
  }
)

console.log('hello')
