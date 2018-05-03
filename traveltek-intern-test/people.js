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
        countEyeColour(people_data, "green");
        surnameCount(people_data);
        //This second parameter is an array of the eiffel towers latitude and longitude
        closestTo(people_data,[48.858370,2.294481])
    });
}

//Made eye colour a parameter for extensibility
function countEyeColour(data, colour) {
    let counter = 0;
    //Simple for loop that runs through the list of people and tallies the target value
    for (let i = 0; i < data.length; i++) {
        if (data[i].eyeColor == colour) {
            counter++;
        }
    }
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
    //In all honesty I have trouble following the logic in this form
    keysSorted = Object.keys(counter).sort(function(a,b){return counter[a]-counter[b]})
    
}

function closestTo(data,target){
    
}