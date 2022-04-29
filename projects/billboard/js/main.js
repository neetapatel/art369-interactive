// load the airtable library 
var Airtable = require('airtable');

// configure the site to point to your Airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyId0TUMVbd1a2PM'
});
var base = Airtable.base('appiC58DhMQ4qhuiF');

// set up a blank array for all your rows
const rows = [];

// set up color arrays

const bgColors = ['rgb(235,74,39)', 'rgb(56,126,247)', 'rgb(74,163,173)', 'rgb(238,121,47)', 'rgb(232,233,85)', 'rgb(118,234,252)', 'rgb(234,59,36)', 'rgb(68,153,43)', 'rgb(43,101,180)', 'rgb(187,38,69)', 'rgb(111, 162, 56)', 'rgb(235,77,193)', 'rgb(228,161,56)', 'rgb(79,175,249)'];
const txtColors = ['rgb(56,126,247)', 'rgb(235,74,39)', 'rgb(238,121,47)', 'rgb(74,163,173)', 'rgb(118,234,252)', 'rgb(232,233,85)', 'rgb(68,153,43)', 'rgb(234,59,36)', 'rgb(187,38,69)', 'rgb(43,101,180)', 'rgb(235,77,193)', 'rgb(111, 162, 56)', 'rgb(79,175,249)', 'rgb(228,161,56)'];

// const bgColors = ['red', 'lime', 'blue', 'orangered', 'lime', 'magenta', 'yellow', 'cyan', 'magenta', 'blue', 'lime', 'blue', 'orangered', 'dodgerblue'];
// const txtColors = ['lime', 'red', 'orangered', 'blue', 'magenta', 'lime', 'cyan', 'yellow', 'blue', 'magenta', 'blue', 'lime', 'dodgerblue', 'orangered'];

// const bgColors = ['red', 'orangered', 'orange', 'yellow', 'lime', 'green', 'cyan', 'blue', 'indigo', 'darkviolet', 'mediumvioletred', 'purple', 'darkorchid', 'deeppink', 'magenta'];
// const txtColors = ['lime', 'darkorchid', 'cyan', 'magenta', 'yellow', 'purple', 'orange', 'orangered',  'red', 'green',  'blue', 'deeppink', 'mediumvioletred', 'darkviolet', 'cyan'];
var totalColors = bgColors.length;

// this line of code says to get all the info from AirTable
// put your table name in the quotes
base('quotes').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");
    rows.push(...records);
    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }
    consoleLogRows();

    // here, we want to show the first record only, 
    // which happens with the showRow function.
    // showRow(rows[index]);
    // var rand = getRandomIntInclusive(1, rows.length);
    showRow(rows[getRandomIntInclusive(1, rows.length)]);
}

var index = 0;

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    console.log("consoleLogRows()");
    rows.forEach((row) => {
        console.log("Row:", row);
    });
    console.log(rows.length);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

// showRows is what puts the content onto the HTML page.
// it only displays a single row.
function showRow(row) {

    console.log("showRow()");

    const slide = document.getElementById("slide");

    var value = getRandomIntInclusive(0, totalColors-1);

    document.body.style.backgroundColor = bgColors[value];
    document.getElementById("logo").style.display = "none";
    document.getElementById("slide-text").style.color = txtColors[value];
    const div = document.getElementById("slide-text");
    div.innerHTML = row.fields.quote;

    // calculate and set height and width of text element
    let box = document.querySelector('#slide-text');
    var h = box.offsetHeight;
    var w = box.offsetWidth;    
    let root = document.documentElement;
    root.style.setProperty('--width', w + "px");
    root.style.setProperty('--height', h + "px");   

    console.log("height: " + h);
    console.log("width: " + w);


}





// This sets up an event.
// When you click on a slide, you replace the content with the message
// form the next row. 
// Some additional logic ensures that when you reach the last row,
// you loop back to the beginning.

function main() {
    var rand = getRandomIntInclusive(1, rows.length);
    console.log(rand);
    showRow(rows[rand]);
}
setInterval(main, 13000);


// document.getElementById("slide-text").addEventListener("click", () => {
//     // console.log(index);
//     showRow(rows[getRandomIntInclusive(1, rows.length)]);
//     // if (index < rows.length - 1) {
//     //     index = index + 1;
//     //     showRow(rows[index]);
//     // } else {
//     //     index = 0;
//     //     showRow(rows[index]);
//     // }
// })

function pop() {
    window.open("https://airtable.com/shrydM5VTPprGXiSJ", "Submission", "width=500,height=600");
}