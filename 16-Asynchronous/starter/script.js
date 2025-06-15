'use strict';

/*
    
    Author:   coulc 
    Date:     2025/6/14

    study:
        AJAX,callback,XMLHttpRequest()
        fetch API 
        consuming promises    then() catch()  finally()
        chaining promises, handling rejected promises
        throw error manually
        async await 
        event loop 
        building a simple promise 
        try ... catch ... finally
        Promise.any() Promise.race() Promise.allSettled()

*/

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


/*
// Event loop 
console.log('test start');  // 1 
setTimeout(() => console.log('0 sec timer'),0);  // 5
Promise.resolve('Resolved Promise 1').then(res => console.log(res));  // 3
console.log('test end');  // 2 

Promise.resolve('Resolved Promise 2').then(res => {  // 4 
    for(let i = 0;i < 10000000000; i ++){};
    console.log(res);
});

*/

/*
// build a simple promise 
const lotteryPromise = new Promise((resolve,reject) => {
    console.log('lotter draw is happening');
    setTimeout(() => {
        if(Math.random() >= 0.5 ){
            resolve('you win.');
        }else{
            reject(new Error('you lost your money.'));
        };
    },2000);
});

lotteryPromise
    .then(data => console.log(data))   
    .catch((err => console.error(err)));

// promisifying setTimeout
const wait = (seconds) => {
    return new Promise(resolve => {
        setTimeout(resolve,seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log('i waited for 2 seconds');
        return wait(2);
    })
    .then(() => {
        console.log('i waited for 2 seconds');
        return wait(3);
    })
    .then(() => {
        console.log('i waited for 3 seconds');
        return wait(1);
    })
    .then(() => {
        console.log('i waited for 1 seconds');
    });

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             },1000);
//         },1000);
//     },1000);
// },1000);

Promise.resolve('abc').then(data => console.log(data));
Promise.reject(new Error('error!!!!!')).catch(err => console.error(err));

*/

/*
const getPosition = () => {
    return new Promise((resolve,reject) =>{
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        );
    });
};

// getPosition().then(pos => console.log(pos));


const whereAmI = () =>{
    getPosition()
        .then(pos =>{
            // const {lat = latitude , lng = longitude} = pos.coords;
            const {latitude : lat ,  longitude : lng} = pos.coords;
            return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        })
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

btn.addEventListener('click',whereAmI);
*/



///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const wait = (seconds) => {
    return new Promise(resolve => {
        setTimeout(resolve,seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImg = (imgPath) => {
    return new Promise((resolve,reject) =>{
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load',() => {
            imgContainer.append(img);
            resolve(img)
        });

        img.addEventListener('error',() => {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg ;
createImg('./img/img-1.jpg')
    .then( img => {
        currentImg = img; 
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none'; 
        return createImg('./img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImg('./img/img-3.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 3 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.log(err));
*/

/*
// async await
const getPosition = () => {
    return new Promise((resolve,reject) =>{
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        );
    });
};

const whereAmI = async () => {
    const pos = await getPosition(); 
    const { latitude: lat , longitude: lng} = pos.coords; 

    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    const getData = await resGeo.json();
    console.log(getData);

    // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
    const res = await fetch(`https://restcountries.com/v2/name/${getData.country}`);
    console.log(res);

    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);

};

// whereAmI('China');
whereAmI();
*/


/*
// try ... catch

// try{
//     let x = 123;
//     const y= 2 ;
//     y = x;
// }catch (err){
//     console.error(err)
// }

const getPosition = () => {
    return new Promise((resolve,reject) =>{
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        );
    });
};

const whereAmI = async () => {
    try{
        const pos = await getPosition(); 
        const { latitude: lat , longitude: lng} = pos.coords; 

        const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
        if(!resGeo.ok){
            throw new Error('Problem getting location data');
        }
        const dataGeo = await resGeo.json();
        console.log(dataGeo);

        // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
        const res = await fetch(`https://restcountries.com/v2/name/${getData.country}`);
        if(!res.ok){
            throw new Error('Problem getting country');
        }
        console.log(res);

        const data = await res.json();
        console.log(data);

        renderCountry(data[0]);

        return `You are in ${dataGeo.city},${dataGeo.countryName}`;
    } catch(err){
        console.error(err);
        renderError(`Something went wrong ${err.message}`);
        throw err;
    }
};

// whereAmI('China');
whereAmI();

console.log('1. Will get location');   
// const city = whereAmI();   // promise
// console.log(city);

// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err}`))
//     .finally(() => {
//         console.log(`3: Finished getting location`);
//     });

(async () => {
    try{
        const result = await whereAmI();
        console.log(`2: ${result.city}`);
    }catch(err) {
        console.log(`2: ${err}`);
    }
    finally{
        console.log(`3: Finished getting location`);
    }
})();



// console.log('1. Will get location');   // 1
// whereAmI();  // 3 
// console.log('3. Finished getting location'); // 2

*/

/*

// running promise in paralle
const getJSON = (url,errorMsg= 'Something went wrong') => {
    return fetch(url).then( response =>{
        if(!response.ok){
            throw new Error(`${errorMsg} ${response.status}`);
        }
        return response.json();
    });
}

const get3Countries = async function(c1,c2,c3) {
    try{
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        //
        // console.log([data1.capital,data2.capital,data3.capital]);

        const data3 = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        const [data3] = await getJSON(`https://restcountries.com/v2/name/${c1}`);


        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ]);

        console.log(data.map(d => d[0].capital));

    }catch(err){
        console.error(err);
    }
};
get3Countries('china','portugal','usa');

*/

// other promise combinators: race, allsettled and any

const getJSON = (url,errorMsg= 'Something went wrong') => {
    return fetch(url).then( response =>{
        if(!response.ok){
            throw new Error(`${errorMsg} ${response.status}`);
        }
        return response.json();
    });
}
// Promise.race
(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/china`),
        getJSON(`https://restcountries.com/v2/name/portugal`),
        getJSON(`https://restcountries.com/v2/name/usa`)
    ]);
    console.log(res[0]);
    console.log(res);
})();

const timeout = function(sec){
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject(new Error('Request took too long'));
        },sec * 1000);
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/china`),
    // timeout(0.01)
    timeout(1)
]).then(data => console.log(data[0])).catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success'),
]).then(data => console.log(data)).catch(err => console.error(err));


// Promise.any
Promise.any([
    Promise.resolve('One Success'),
    Promise.reject('Error'),
    Promise.resolve('Two Success'),
]).then(data => console.log(data)).catch(err => console.error(err));




///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = (seconds) => {
    return new Promise(resolve => {
        setTimeout(resolve,seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImg = (imgPath) => {
    return new Promise((resolve,reject) =>{
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load',() => {
            imgContainer.append(img);
            resolve(img)
        });

        img.addEventListener('error',() => {
            reject(new Error('Image not found'));
        });
    });
};

const loadNPause = async function(){
    try{
        let img = await createImg('./img/img-1.jpg');
        console.log('Image 1 loaded'); 
        await wait(2);
        img.style.display = 'none';

        img = await createImg('./img/img-2.jpg');
        console.log('Image 2 loaded'); 
        await wait(2);
        img.style.display = 'none';

        img = await createImg('./img/img-3.jpg');
        console.log('Image 3 loaded'); 
        await wait(2);
        img.style.display = 'none';
    }catch(err){
        console.error(err);
    };
};
// loadNPause();

const loadAll = async function(imgArr){
    try{
        const imgs = imgArr.map(async img => 
            await createImg(img)
        );
        console.log(imgs);
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel')); 
    }catch(err){
    }
}
loadAll(['./img/img-1.jpg','./img/img-2.jpg','./img/img-3.jpg',]);



// let currentImg ;
// createImg('./img/img-1.jpg')
//     .then( img => {
//         currentImg = img; 
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none'; 
//         return createImg('./img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImg('./img/img-3.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 3 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.log(err));
