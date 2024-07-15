function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // You can perform any validation or processing here

    // Redirect to the main page
    window.location.href = `main.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`;
}
