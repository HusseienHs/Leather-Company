document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create an object with the data to send
    const formData = {
        name: name,
        email: email
    };

    // Use Fetch API to send the data to the back-end
    fetch('http://localhost:5001/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the data as a JSON string
    })
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Handle the response from the server
            document.getElementById('responseMessage').innerText = data.message;
        })
        .catch(error => {
            // Handle any errors that occur
            document.getElementById('responseMessage').innerText = "Error submitting form!";
            console.error("Error:", error);
        });
});
