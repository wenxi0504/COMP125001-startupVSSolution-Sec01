/*    JavaScript 6th Edition
 *    Assignment 2 Create a table 
 *    Author:Wen Sophie Xu
 *    Date: 14th, June,2020

 *    Filename: Assignment2.js
 */
// global variables
//var rows = 0;
//var columns = 0;
//function addTable() {
//    var table = '';
//    var rows = document.getElementById("row");
//    console.log("rows: " + rows.value);
//    var columns = document.getElementById("column");
//    console.log("columns: " + columns.value);
//    for (var i = 0; i < rows.value; i++) {
//        table += '<tr>';
//        for (var j = 0; j < columns.value; j++) {
//            table += '<td>' + i + ',' + j + '</td>'
//        }
//        table += '</tr>';

//    }


//    console.log("table " + table);
//    document.getElementById("outputtable").innerHTML = table;
//}
//function resettable() {
//    document.getElementById("row").value = 0;
//    document.getElementById("column").value = 0;
//    document.getElementById("outputtable").innerHTML = '';
//    //addTable();
//    createEventListeners();
//}
//function createEventListeners() {

//    document.getElementById("outputtable").addEventListener("change", addTable, false);
//    var submit = document.getElementById("submitbuttom");
//    submit.addEventListener("click", addTable, false);
//    var reset = document.getElementById("reset");
//    reset.addEventListener("click", resettable, false);
////}
//window.addEventListener("load", resettable, false);
var winWidth = 300;
    var winHeight = 200;
    var leftPosition = (screen.width - winWidth) / 2;
    var topPosition = (screen.height - winHeight) / 2;
    var optionString = "width=" + winWidth + ",height=" + winHeight + ",left=" + leftPosition + ",top=" + topPosition;
    var myWindow = window.open("http://studentweb.cencol.ca/wxu63/05%20Assignment2/Assignment2.html", "", optionString);
    myWindow.focus();
    setTimeout("myWindow.close()", 5000);

