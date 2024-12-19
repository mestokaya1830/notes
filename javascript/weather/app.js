const container = document.getElementById('container')
const weatherBox = document.getElementById('weather-box')
const weatherDetails = document.getElementById('weather-details')
const error404 = document.getElementById('not-found')

document.getElementById('searchBtn').addEventListener('click', () => {
  searchFunc()
})
document.getElementById('search').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    searchFunc()
  }
})

async function searchFunc(){
  const key = '145a2d7a62ed90214a736c2cc635765e'
  const city = document.getElementById('search').value

  if (city === '')
    return

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
    .then(result => result.json())
    .then(json => {

      if (json.cod === '404') {
        container.style.height = '400px'
        weatherBox.style.display = 'none'
        weatherDetails.style.display = 'none'
        error404.style.display = 'block'
        error404.classList.add('fadeIn')
        return
      }

      error404.style.display = 'none'
      error404.classList.remove('fadeIn')

      const image = document.querySelector('#weather-box #img')
      const temperature = document.querySelector('#weather-box #temperature')
      const description = document.querySelector('#weather-box #description')
      const humidity = document.querySelector('#weather-details #humidity span')
      const wind = document.querySelector('#weather-details #wind span')

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'images/clear.png'
          break

        case 'Rain':
          image.src = 'images/rain.png'
          break

        case 'Snow':
          image.src = 'images/snow.png'
          break

        case 'Clouds':
          image.src = 'images/cloud.png'
          break

        case 'Haze':
          image.src = 'images/mist.png'
          break

        default:
          image.src = ''
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
      description.innerHTML = `${json.weather[0].description}`
      humidity.innerHTML = `${json.main.humidity}%`
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

      weatherBox.style.display = ''
      weatherDetails.style.display = ''
      weatherBox.classList.add('fadeIn')
      weatherDetails.classList.add('fadeIn')
      container.style.height = '590px'
    })
}