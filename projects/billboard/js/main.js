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

// set up a blank duplicate array for shuffling
const deck = [];

// set up color arrays
const bgColors = ['rgb(235,74,39)', 'rgb(56,126,247)', 'rgb(74,163,173)', 'rgb(238,121,47)', 'rgb(232,233,85)', 'rgb(118,234,252)', 'rgb(234,59,36)', 'rgb(68,153,43)', 'rgb(43,101,180)', 'rgb(187,38,69)', 'rgb(111, 162, 56)', 'rgb(235,77,193)', 'rgb(228,161,56)', 'rgb(79,175,249)'];
const txtColors = ['rgb(56,126,247)', 'rgb(235,74,39)', 'rgb(238,121,47)', 'rgb(74,163,173)', 'rgb(118,234,252)', 'rgb(232,233,85)', 'rgb(68,153,43)', 'rgb(234,59,36)', 'rgb(187,38,69)', 'rgb(43,101,180)', 'rgb(235,77,193)', 'rgb(111, 162, 56)', 'rgb(79,175,249)', 'rgb(228,161,56)'];

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
    // consoleLogRows();

    // duplicate data
    for (let i = 0; i < rows.length; i ++) deck[i] = rows[i];
    // shuffle deck
    for (let i = rows.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    // here, we want to show the first record only, 
    // which happens with the showRow function.
    showRow(deck[0]);
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    console.log("consoleLogRows()");
    rows.forEach((row) => {
        console.log("Row:", row);
    });
    console.log(rows.length);
}

// showRows is what puts the content onto the HTML page.
// it only displays a single row.
function showRow(row) {
    console.log("showRow()");

    const slide = document.getElementById("slide");

    var value = Math.floor(Math.random() * totalColors);
    
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
}

var index = 0;

function main() {
    console.log("index: " + index);
    if (index < deck.length - 1) {
        index = index + 1;
        showRow(deck[index]);
    } else {
        index = 0;
        showRow(deck[index]);
    }
}
setInterval(main, 13000); 

function pop() {
    window.open("https://airtable.com/shrydM5VTPprGXiSJ", "Submission", "width=500,height=600");
}