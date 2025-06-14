'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = (msg) => {
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity = 1;
};

const renderCountry = function(data,className){
    // console.log(this.responseText);
    const html = `
<article class="country ${className}" >
<img class="country__img" src="${data.flag}" />
<div class="country__data">
<h3 class="country__name">${data.name}</h3>
<h4 class="country__region">${data.region}</h4>
<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>
`;

    countriesContainer.insertAdjacentHTML('beforeend',html);
    // countriesContainer.style.opacity = 1;
    countriesContainer.style.opacity = 1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////


/*
// old method
const getCountryData = function(country){
    const request = new XMLHttpRequest();

    request.open('GET',`https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load',function(){
        // console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const html = `
            <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
            </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    });
}
getCountryData('usa');
getCountryData('China');
getCountryData('portugal');

*/

/*
// callback hell
const renderCountry = function(data,className){
    // console.log(this.responseText);
    const html = `
        <article class="country ${className}" >
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function(country){
    const request = new XMLHttpRequest();

    request.open('GET',`https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // render country 1
        renderCountry(data);

        // get neighbour country
        const [neighbour] = data.borders;

        if(!neighbour) return;


        const request2 = new XMLHttpRequest();

        request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load',function() {
            console.log(this.responseText);
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            // render country 2
            renderCountry(data2,'neighbour');
        });



    });
};

getCountryAndNeighbour('china');
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            },1000);
        },1000);
    },1000);
},1000);

*/


/*
// consume promise
// modern method, through fetch API
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

// const getCountryData = (country) => {
//     fetch(`https://restcountries.com/v2/name/${country}`).then((response) => {
//         console.log(response);
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

const getCountryData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0]));
};
getCountryData('portugal');
*/


/*
// chaining promise
const getCountryData = (country) => {
    // cuntry 1
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) return;
            // country 2 
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data,'neighbour'))

};
getCountryData('china');
*/

/*
// handling rejected promise
const getCountryData = (country) => {
    // cuntry 1
    fetch(`https://restcountries.com/v2/name/${country}`)
    // fetch(`https://restcountries.com/v20102235sadfasdfasfd/name/${country}`)
        .then(
            (response) => response.json(), 
        //    err => alert(err)
        )
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) return;
            // country 2 
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
            // return fetch(`https://restcountries.com/v2/asdfasdf as df/${neighbour}`);
        })
        .then(response => response.json(),
       //     err => alert(err)
        )
        .then(data => renderCountry(data,'neighbour'))
        // Capture any errors that occur anywhere
        .catch(err => {
            console.error(`${err} !!!`);
            renderError(`something went wrong ${err.message}. Try again!`);
        })
        .finally(() =>{
            countriesContainer.style.opacity = 1;
        })
};

btn.addEventListener('click',() => {
    getCountryData('china');
});

getcountrydata('asdfasdf');
*/




/*
// throwing errors manually

const getJSON = (url,errorMsg= 'Something went wrong') => {
    return fetch(url).then( response =>{
        if(!response.ok){
            throw new Error(`${errorMsg} ${response.status}`);
        }
        return response.json();
    });
}


// const getCountryData = (country) => {
//     // cuntry 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     // fetch(`https://restcountries.com/v20102235sadfasdfasfd/name/${country}`)
//         .then(
//             (response) => {
//                 console.log(response);
//                 if(!response.ok){
//                     throw new Error(`Country not found(${response.status})`)
//                 }
//                 // err => alert(err)
//                 return response.json();
//             }
//         )
//         .then((data) => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             if(!neighbour) return;
//             // country 2 
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//             // return fetch(`https://restcountries.com/v2/asdfasdf as df/${neighbour}`);
//         })
//         .then(response => {
//             if(!response.ok){
//                 throw new Error(`Country not found(${response.status})`)
//             }
//        //     err => alert(err)
//             return response.json();
//         })
//         .then(data => renderCountry(data,'neighbour'))
//         // Capture any errors that occur anywhere
//         .catch(err => {
//             console.error(`${err} !!!`);
//             renderError(`something went wrong ${err.message}. Try again!`);
//         })
//         .finally(() =>{
//             countriesContainer.style.opacity = 1;
//         })
// };


const getCountryData = (country) => {

    getJSON(`https://restcountries.com/v2/name/${country}`
        ,'Country not found')
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) throw new Error('No neighbour found!');

            getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,'Country not found')
        })
        .then(data => renderCountry(data,'neighbour'))
        // Capture any errors that occur anywhere
        .catch(err => {
            console.error(`${err} !!!`);
            renderError(`something went wrong ${err.message}. Try again!`);
        })
        .finally(() =>{
            countriesContainer.style.opacity = 1;
        })
};


btn.addEventListener('click',() => {
    getCountryData('china');
});

getCountryData('asdfasdf');

*/




///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = (lat,lng) =>{
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        .then(response => {
            if(!response.ok){
                throw new Error(`Problem with geocoding ${response.status}`);
            }
            console.log(response);
            return response.json();
        }).then(data =>{
            console.log(data);
            console.log(`You are in ${data.city},${data.countryName}`);

            return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
        })
        .then(res =>{
            if(!res.ok){
                throw new Error(`Country not found(${res.status})`);
            }
            return res.json();
        })
        .then(data => {
            renderCountry(data[0]);
        })
        .catch((err) => console.error(`you error: ${err.message}`))
}

whereAmI(52.508,13.181);
whereAmI(19.037,72.873);
whereAmI(-33.933,18.474);

*/



