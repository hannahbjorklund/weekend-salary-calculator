console.log("Oh hi there, JS is working!");

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
        <td>${annualSalary}</td>
        <td><button>Delete</button></td>
    </tr>`;
    // Clear the form fields
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("idNum").value = '';
    document.getElementById("title").value = '';
    document.getElementById("annualSalary").value = '';
}