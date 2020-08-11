/*    JavaScript 6th Edition
 *    Assignment 2 Create a table 
 *    Author:Wen Sophie Xu
 *    Date: 14th, June,2020

 *    Filename: Assignment2.js
 */
// global variables
var rows = 0;
var columns = 0;
function addTable()
{
    var table = '';
    var rows = document.getElementById("row");
    console.log("rows: " + rows.value);
    var columns = document.getElementById("column");
    console.log("columns: " + columns.value);
    for (var i = 0; i < rows.value; i++) {
        table += '<tr>';
        for (var j = 0; j < columns.value; j++) {
            table += '<td>'+i + ','+j + '</td>'
        }
        table += '</tr>';
       
    }
   
        
    console.log("table " + table);
    document.getElementById("outputtable").innerHTML=table;
}
function resettable() {
    document.getElementById("row").value =0;
    document.getElementById("column").value = 0;
    document.getElementById("outputtable").innerHTML ='';
    //addTable();
    createEventListeners();
}
function createEventListeners() {
    
    document.getElementById("outputtable").addEventListener("change", addTable, false);
    var submit = document.getElementById("submitbuttom");
    submit.addEventListener("click", addTable, false);
    var reset = document.getElementById("reset");
    reset.addEventListener("click", resettable, false);
}
window.addEventListener("load", resettable, false);
