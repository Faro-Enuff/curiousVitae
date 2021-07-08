//Saving the INPUT of the REGISTRATION PAGE

console.log(`document`, document.location)

let params = (new URL(document.location)).searchParams;
console.log(`params`, params)
let eMail = params.get('email')
console.log(`email`, eMail);
let firstName = params.get('fname');
console.log(`name`, firstName)
let lastName = params.get('lname');
console.log(`lastName`, lastName)
let birthday = params.get('bday');
console.log(`birthDay`, birthday);
let gender = params.get('gender');
console.log(`gender`, gender);
let hobby = params.get('hobby');
console.log(`hobby`, hobby);
let level = params.get('level');
console.log(`level`, level);

let cellName = ['Submitted Data: ' ,`Birthday: ${birthday} `,`Gender: ${gender} `,`Hobby: ${hobby} `, `Level: ${level} `]

//CREATION OF HTML ELEMENTS AND DOM MANIPULATION

var grid = document.getElementById('grid');
grid.setAttribute("class", "grid_container")


//TEXT ELEMENT - CREATION
//
//
//
var para = document.createElement('p');

para.setAttribute("class", "text_container");

para.innerHTML = "Thank you " + firstName  + " for submitting your data. This will help us to improve our own product a lot!!! We have send you a confirmation mail to your mail account (" + eMail + "). If you wish to receive any further update on our product, please click on the link we have send to you.";

grid.appendChild(para);

//TABLE ELEMENT - CREATION
//
//
//
var tbl = document.createElement('table');
var tblBody = document.createElement('tbody');


for(var i = 0; i < 5; i++){
    var row = document.createElement('tr');
    cellName[i];
        if(i == 0){
            var cellHead = document.createElement('th');
            cellHead.innerHTML = cellName[i];
            row.appendChild(cellHead);
            cellHead.setAttribute("class", "table_head");
        }
        else{
            var cell = document.createElement('td');
            cell.innerHTML = cellName[i];
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
}
      
tbl.appendChild(tblBody);

grid.appendChild(tbl);

tbl.setAttribute("class", "table_container");

//STYLE EDIT _ BOTTOM SPACE
