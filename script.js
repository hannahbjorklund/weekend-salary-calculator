console.log("Oh hi there, JS is working!");
// Creating a variable to keep track of the total monthly cost of all employees
let totalMonthly = 0;

// Take in form submission data and add a new row to table. 
function handleSubmit(event){
    // Prevent form submission from refreshing the page
    event.preventDefault();
    // Collect form data and store in variables
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let idNum = document.getElementById("idNum").value;
    let title = document.getElementById("title").value;
    let annualSalary = document.getElementById("annualSalary").value;
    // Check variables
    console.log(`User submitted: ${firstName}, ${lastName}, ${idNum}, ${title}, ${annualSalary}`);
    // Create a variable for the table body, where we would like to add new information in a row
    let tableBody = document.getElementById("tableBody");
    // Add a new table row with all the form data
    tableBody.innerHTML += 
    `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td>$${annualSalary}</td>
        <td><button onclick='deleteEmployee(event)'>Delete</button></td>
    </tr>`;
    // Clear the form fields
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("idNum").value = '';
    document.getElementById("title").value = '';
    document.getElementById("annualSalary").value = '';

    // Update total monthly
    totalMonthly += annualSalary/12;
    console.log("Total monthly:", totalMonthly);
    // Create a variable for the footer, where we will update the total monthly cost
    let span = document.getElementById("total-monthly");
    // Make total monthly red if the total exceeds $20,000, else leave it black
    span.innerHTML = `$${totalMonthly.toFixed(2)}`;
    if(totalMonthly > 20000){
        span.classList.add('over-budget');
    }
}

// Allow the user to delete an employee using the delete button
function deleteEmployee(event){
    console.log("You wish to delete this employee.");
    //Must use parentElement twice since we want to delete the entire row, not just the button itself
    event.target.parentElement.parentElement.remove();
}