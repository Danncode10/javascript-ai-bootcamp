// Function to fetch random user data and update the card
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const user = data.results[0];

        // Update profile image
        document.querySelector('img[alt="Profile"]').src = user.picture.large;

        // Update name (First + Last)
        document.getElementById('r_name').textContent = `${user.name.first} ${user.name.last}`;

        // Update email
        document.getElementById('r_email').textContent = user.email;

        // Update age
        document.getElementById('r_age_content').textContent = user.dob.age;

        // Update location (city)
        document.getElementById('r_location_content').textContent = user.location.city;

        // Update about (Random User API does not provide about info, so we use a placeholder)
        document.getElementById('r_about_content').textContent = "Random User";

        // Update contact mailto link dynamically
        document.getElementById('r_contact').href = `mailto:${user.email}`;
        
    } catch (error) {
        alert('Failed to fetch random user: ' + error.message);
        console.error('Fetch error:', error);
    }
}

// Add click event listener to the button
document.getElementById('r_generate').addEventListener('click', fetchRandomUser);

// Optional: fetch a user on page load
window.addEventListener('load', fetchRandomUser);
