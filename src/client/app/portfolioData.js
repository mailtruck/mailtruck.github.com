var bcdPortfolioData = [
  {

  title: 'Weather App',
  imgUrl: './assets/weather.png',
  description: 'Weather App made for Free Code Camp: The project is built with react and uses superagent for the AJAX calls. The user'+String.fromCharCode(39)+'s location is obtained by calling out to ip-api.com, and the weather data is from [OpenWeatherMap](http://google.com). The user can click on the temperature to switch between Celcius and Fahrenheit.',
  urls: [
    {
      label:'codepen',
      url: 'http://codepen.io/boshi/full/qNQEKW/'
    }
  ]
},
{
  title: 'URL Shortener Microservice',
  imgUrl: './assets/url-shortener.png',
  description: 'Microservice api made for Free Code Camp: This project is built with Node, Express, MongoDB, and is deployed to Heroku. It allows the user to create shortened URLs by calling https://bcd-fcc-urls.herokuapp.com/new/(url to shorten here). The JSON response returns both the original url and the shortened url. When the user navigates to the shortened url they are redirected to the original url.',
  urls: [
    {
      label:'heroku',
      url: 'https://bcd-fcc-urls.herokuapp.com/'
    },
    {
      label:'github',
      url:'https://github.com/mailtruck/fcc-urlshortener'
    }
  ]
},
{
  title: 'Tic Tac Toe Game',
  imgUrl: './assets/tic-tac.png',
  description: 'Tic Tac Toe Game built for Free Code Camp: This project is built with jQuery. The game allows the user to play tic tac toe against the computer. The user can choose between X and O before the game begins. The computer'+String.fromCharCode(39)+'s AI is a work in progress.',
  urls: [
    {
      label:'codepen',
      url: 'http://codepen.io/boshi/full/vKOLgW/'
    }
  ]
},
{
  title: 'Pomodoro Timer App',
  imgUrl: './assets/pomo.png',
  description: 'Pomodoro Timer App Built for Free Code Camp: This project is built with bootstrap and jQuery. It allows the user to set a timer for the Pomodoro Technique. This technique breaks work down into intervals, traditionally 25 minutes in length, separated by short breaks. The user can adjust the time length of the work intervals and breaks, and the app plays a sound when switching between work and break timers. ',
  urls: [
    {
      label:'codepen',
      url: 'http://codepen.io/boshi/full/MyZOpP/'
    }
  ]
},
{
  title: 'Timestamp Microservice',
  imgUrl: './assets/timestamp.png',
  description: 'Timestamp Microservice API built for Free Code Camp: This project is built with Node, Express, and Moment.js. If the user calls the URL with either a natural language date or a Unix timestamp the JSON response returns both the natural language and Unix timestamp representations for that date. ',
  urls: [
    {
      label:'heroku',
      url: 'https://bcd-fcc-timestamp.herokuapp.com/'
    },
    {
      label:'github',
      url:'https://github.com/mailtruck/fcc-timestamp'
    }
  ]
},
// {
//   title:'Calculator App',
//   imgUrl:'./assets/calc.png',
//   description:'calculator app',
//   urls:[
//     {label:'codepen', url: 'http://codepen.io/boshi/pen/vGQzBd'}
//   ]
// },
{
  title:'Random Quote Generator',
  imgUrl:'./assets/quotes.png',
  description: 'Random Quote Generator Built for Free Code Camp. This project is built with Bootstrap and jQuery. The App allows the user to hit a button to display a random quote and tweet the quote with the other button.',
  urls:[
    {label:'codepen', url: 'http://codepen.io/boshi/full/EKdEEy/'}
  ]

}
];

export default bcdPortfolioData;
