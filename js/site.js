//pull value from the page
function getValues() {
    let userString = document.getElementById("revString").value;

    //call reverse a string
    let revString = reverseAString(userString);

    //display the reversed string
    displayData(revString);
}

//this is our generate data function
function reverseAString(userString) {

    let revString = "";

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}


//display out reversed strinf to the page
function displayData(revString) {

    document.getElementById("msg").innerHTML = `Your String reversed is: ${revString}`;
    document.getElementById("alert").classList.remove('d-none');

}