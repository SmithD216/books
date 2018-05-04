window.onload = loadPage();

//Retrieves data from local json file
function loadJSON(callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open('GET', 'fakepeople.json', true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            callback(xhttp.responseText);
        }
    };
    xhttp.send(null);
}

//Takes the parsed JSON data and passes it to the relevant functions
function loadPage() {
    loadJSON(function (response) {
        people_data = JSON.parse(response);
        countEyeColour(people_data, "green", true);
        surnameCount(people_data);
        //This second parameter is an array of the eiffel towers latitude and longitude
        closestTo(people_data, [48.858370, 2.294481]);
        ageEyeColour(people_data, "blue");
        ageWealth(people_data);
    });
}

//Made eye colour a parameter for extensibility as well as a display parameter to disable adding the results to the DOM by default
function countEyeColour(data, colour, display = false) {
    let counter = 0;
    //Simple for loop that runs through the list of people and tallies the target value
    for (let i = 0; i < data.length; i++) {
        if (data[i].eyeColor == colour) {
            counter++;
        }
    }
    display ? document.getElementById('eye-counter').innerHTML = `There are ${counter} people with ${colour} eyes.` : counter;
    return counter;
}

function surnameCount(data) {
    //Here I used an object to keep track of surname frequency where the surname is the key and the tally is the value
    let counter = {};
    for (let i = 0; i < data.length; i++) {
        let target = data[i].name.last;
        if (counter[target]) {
            counter[target]++;
        } else {
            counter[target] = 1;
        }
    }
    //Here we sort the counter objects and add them to an array
    let sortarr = [];
    for (let entry in counter) {
        sortarr.push([entry, counter[entry]]);
    }
    sortarr.sort(function (a, b) { return (b[1] - a[1]) });

    //Finally we loop to display the contents of the sorted array
    for (let top = 0; top < 10; top++) {
        document.getElementById('common-surnames').innerHTML += `${sortarr[top]}<br>`;
    }
}

function closestTo(data, target) {
    //I tried looking for implementations of finding the closest co-ordinates but the solutions were too complex for me.
    //I could have copied them but that doesn't give an accurate representation of my abilities.
    document.getElementById('closest-to').innerHTML = `I wasn't able to complete the eiffel tower part of the test.`;
}

//After looking at this functionality I would give the eye colour matching loop it's own function if I were to rewrite this
function ageEyeColour(data, target) {
    let age = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].eyeColor == target) {
            age += data[i].age;
        }
    }
    average = age / countEyeColour(data, target);
    document.getElementById('average-eyes').innerHTML = `The average age of people with ${target} eyes is ${Math.round(average * 10) / 10} .`;
}

function ageWealth(data) {
    let counter = {};
    //Here I used a similar loop -> object system as for surnames but this time I'm adding the current users balance rather than just incrementing
    for (let i = 0; i < data.length; i++) {
        let target = data[i].age;
        if (counter[target]) {
            //The balance property is a string so we need to remove the comma and convert it to a float before adding it
            counter[target] += parseFloat(data[i].balance.replace(",", ""));
        } else {
            counter[target] = parseFloat(data[i].balance.replace(",", ""));
        }
    }

    //I'll just use the same object -> array method as in the surname function, could have possibly gone in its own function
    let sortarr = [];
    for (let entry in counter) {
        sortarr.push([entry, counter[entry]]);
    }
    sortarr.sort(function (a, b) { return (b[1] - a[1]) });

    //Finally we loop to display the contents of the sorted array
    for (let top = 0; top < 10; top++) {
        document.getElementById('age-wealth').innerHTML += `Age: ${sortarr[top][0]} | Balance: ${sortarr[top][1].toFixed(2)} <br>`;
    }
}