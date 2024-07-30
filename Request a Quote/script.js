document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const projectType = document.getElementById('projectType').value;
    const timeframe = document.getElementById('timeframe').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const budget = document.getElementById('budget').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value;
    const file = document.getElementById('file').files[0];
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Project Type: ${projectType}`);
    console.log(`Timeframe: ${timeframe}`);
    console.log(`Email: ${email}`);
    console.log(`Country: ${country}`);
    console.log(`Budget: ${budget}`);
    console.log(`Company: ${company}`);
    console.log(`Skills: ${skills}`);
    console.log(`File: ${file ? file.name : 'No file uploaded'}`);
    console.log(`Message: ${message}`);

    alert('Your quote request has been submitted successfully!');

    // Here you would typically send the form data to a server
    // using an AJAX request or similar method.
});
