
// global variables

var MenMetricBMR=0;
var WomenMetricBMR=0; 
var MenImperialBMR=0;
var WomenImperialBMR=0;                 
var BMRCalculator=0;           

function calcStaff()  
{
    var gender = document.getElementById("gender");
    console.log("gender: " + gender.value);
    var units = document.getElementById("units");
    console.log("units: " + units.value);
    var age = document.getElementById("age");
    console.log("age: " + age.value);
    var feet = document.getElementById("feet");
    console.log("feet: " + feet.value);
    var inches = document.getElementById("inches");
    console.log("inches: " + inches.value);
    var pounds = document.getElementById("pounds");
    console.log("Pounds: " + pounds.value);

    MenMetricBMR = 66.5 + (13.75 * pounds.value / 2.20462) + (5.003 * (feet.value * 30.48 + inches.value * 2.54)) - (6.755 * age.value);
    console.log("MenMetricBMR: " + MenMetricBMR);
    WomenMetricBMR = 655 + (9.563 * pounds.value / 2.20462) + (1.850 * (feet.value * 30.48 + inches.value * 2.54)) - (4.676 * age.value);
    console.log("WomenMetricBMR: " + WomenMetricBMR);
    MenImperialBMR = 66 + (6.2 * pounds.value) + (12.7 * (feet.value * 12 + inches.value)) - (6.76 * age.value);
    console.log("MenImperialBM: " + MenImperialBMR);
    WomenImperialBMR = 655 + (4.35 * pounds.value) + (4.7 * (feet.value * 12 + inches.value)) - (4.7 * age.value);
    console.log("WomenImperialBM: " + WomenImperialBMR);
}
function Calculate()

{
    var gender = document.getElementById("gender");
    var units = document.getElementById("units");
    if (gender.value === "Male")
    {
        switch (units.value)
        {
            case "Metric":
                BMRCalculator = MenMetricBMR;
                break;
            case "Imperial":
                BMRCalculator = MenImperialBMR;
                break;
            default:
              
                break;
        }
    }
    else if (gender.value === "Female")
        {

            switch (units.value)
            {
                case "Metric":
                    BMRCalculator = WomenMetricBMR;
                    break;
                case "Imperial":
                    BMRCalculator = WomenImperialBMR;
                    break;
                default:
                    
                    break;
            }


        }

        console.log("BMR: " + BMRCalculator);

    document.getElementById("BMR").innerHTML = BMRCalculator;

    

    

}
    // sets all form field values to defaults
function resetField()
{
        document.getElementById("gender").value ="Male";
         document.getElementById("units").value = "Metric";
        document.getElementById("age").value = 0;
        document.getElementById("feet").value = 0;
        document.getElementById("inches").value = 0;
    document.getElementById("pounds").value = 0;
    document.getElementById("BMR").innerHTML= 0;
        calcStaff();
       createEventListeners();
       

    }

    //creates event listeners
function createEventListeners()
{
    document.getElementById("gender").addEventListener("change", Calculate, false);
    document.getElementById("units").addEventListener("change", Calculate, false);
    document.getElementById("age").addEventListener("change", calcStaff, false);
    document.getElementById("feet").addEventListener("change", calcStaff, false);
    document.getElementById("inches").addEventListener("change", calcStaff, false);
    document.getElementById("pounds").addEventListener("change", calcStaff, false);
    var submit = document.getElementById("submitbuttom");
    submit.addEventListener("click", Calculate, false);
    var reset = document.getElementById("reset");
    reset.addEventListener("click", resetField, false);
   


}

    // resets form when page is reloaded
    // INSTRUCTOR NOTE: Code in Step 2 on p. 82 is incorrect; should be as follows:
    window.addEventListener("load", resetField, false);
