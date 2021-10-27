//Constants

const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'B77R3Ey6UIIGjN9eVG4gPCevUNCoIEbfVTccOXVX';

//State Variables
let apiData;
//Cached Element References
const $main = $('main');


//Event Listeners


//Functions
function getData(){
    // get api data and assign it to our apiData state variable
    $.ajax(BASE_URL +'?api_key=' +API_KEY + '&count=6')
    .then(function(data){
        apiData = data;
        WebGL2RenderingContext();
    }, function(error) {

    });
}

function render(){
    //transfer our api data to the DOM
}