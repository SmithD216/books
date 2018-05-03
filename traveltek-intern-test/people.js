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

function loadPage() {
    loadJSON(function (response) {
        people_data = JSON.parse(response);
        countEyeColour(people_data, "green", true);
        surnameCount(people_data);
        //This second parameter is an array of the eiffel towers latitude and longitude
        closestTo(people_data, [48.858370, 2.294481]);
        ageEyeColour(people_data, "blue");
    });
}

//Made eye colour a parameter for extensibility
function countEyeColour(data, colour, display=false) {
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
    keysSorted = Object.keys(counter).sort(function (a, b) { return counter[a] - counter[b] })
    document.getElementById('common-surnames').innerHTML = `The most common surnames are: <br> ${keysSorted.slice(-10)} <br> Although most of the surnames appeared 9 or 10 times each so there wasn't really a "top 10 most common."`;
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
    document.getElementById('average-eyes').innerHTML = `The average age of people with ${target} eyes is ${Math.round(average * 10)/10} .`;
}