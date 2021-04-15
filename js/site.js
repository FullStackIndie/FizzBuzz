// Take user input and print numbers to the page
function printNumbers(){
    let start = parseInt(document.getElementById("numOne").value);
    let end = parseInt(document.getElementById("numTwo").value); 

    let numbers = getRange(start, end);

     displayData(numbers);
}

// Gets the range of numbers
function getRange(start, end){
    if (end > 50_000) {
        alert("End Number Is To High, Cannot Exceed 50,000");
        return;
    }

    let newArray = [];
    for (let index = start; index <= end; index++) {
        newArray.push(getFizzBuzz(index));
    }
    return newArray;
}

function getFizzBuzz(num) {
    let multiple1 = document.getElementById("mulOne").value;
    let multiple2 = document.getElementById("mulTwo").value;
    if (num % multiple1 == 0 && num % multiple2 == 0) {
        return `FizzBuzz`;
    } 
    else
    {
        if (num % multiple1 == 0) {
            return `Fizz`;
        }
        if (num % multiple2 == 0) {
            return `Buzz`;
        }
    }
    return num;
}

// Display the numbers on the page
function displayData(numbers){
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    // Clones a template, then filters for all <td> elements, then gets the length
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    resultsBody.innerHTML = "";

    // Loop over every element in the numbers array
    // Get the values and write them to the page
    for (let rowIndex = 0; rowIndex < numbers.length; rowIndex += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        let cols = dataRow.querySelectorAll("td"); // Returns array of td elements
        
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[rowIndex + colIndex];
            formatFizzBuzz(value, cols, colIndex);
            // Add the row to the page
            resultsBody.appendChild(dataRow);
        }
    }
}

function formatFizzBuzz(value, cols, colIndex){
    if (typeof value === "undefined") {
        value = "";
    }else {
        if (value == `FizzBuzz`) {
            cols[colIndex].classList.add("fizzBuzz");
        }
        if (value == `Fizz`) {
            cols[colIndex].classList.add("fizz");
        }
        if (value == `Buzz`) {
            cols[colIndex].classList.add("buzz");
        }
    }
    // Note: <td> use textContent to set content
    cols[colIndex].textContent = value;
}


function changeValue() {
    let multiple1 = document.getElementById("mulOne").value;
    let multiple2 = document.getElementById("mulTwo").value;
    document.getElementById("mulFizz").textContent = `${multiple1} = `;
    document.getElementById("mulBuzz").textContent = `${multiple2} = `;
    document.getElementById("mulFizzBuzz").textContent = `${multiple1} & ${multiple2} = `;
}