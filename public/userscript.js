import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyCZOF9TLp6uEDGDDBvVOfLAGHl03Rm88fw",
    authDomain: "smart-dustbin-50eec.firebaseapp.com",
    databaseURL: "https://smart-dustbin-50eec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-dustbin-50eec",
    storageBucket: "smart-dustbin-50eec.appspot.com",
    messagingSenderId: "1040922628781",
    appId: "1:1040922628781:web:7b3bd8949e97b51afa6c24",
    measurementId: "G-TP4WKVQV1B"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const temperatureRef = ref(database, 'Sensor/DHT_TEMP');
const humidityRef = ref(database, 'Sensor/DHT_HUMDI');
const wasteLevelRef = ref(database, 'Sensor/ULTRA_ONE');
const statusRef = ref(database, 'Sensor/Status');

onValue(temperatureRef, (snapshot) => {
    const temp = snapshot.val();
    document.getElementById('temperature').innerHTML = temp + " &#8451;";
});

onValue(humidityRef, (snapshot) => {
    const humidity = snapshot.val();
    document.getElementById('humidity').innerHTML = humidity + "%";
});

onValue(wasteLevelRef, (snapshot) => {
    const wasteLevel = snapshot.val();
    document.getElementById('waste-level').innerHTML = wasteLevel + "%";
});
onValue(statusRef, (snapshot) => {
    const statusRef = snapshot.val();
    document.getElementById('Status').innerHTML = statusRef ;
});
document.getElementById('request-collection').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
});

document.getElementsByClassName('close-button')[0].addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

document.getElementById('submit-date').addEventListener('click', () => {
    const collectionDate = document.getElementById('collection-date').value;
    if (collectionDate) {
        alert(`Collection request has been sent for ${collectionDate}!`);
        // Implement logic to update Firebase or send a request for waste collection
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    } else {
        alert('Please enter a valid date.');
    }
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


/* Notification Bell Icon */


document.addEventListener('DOMContentLoaded', () => {
    const bellIcon = document.getElementById('bell-icon');
    const notificationContent = document.getElementById('notification-content');

    // Example: Set has-messages class based on message availability
    const hasMessages = true; // This should be dynamically set based on real message data

    if (hasMessages) {
        bellIcon.classList.add('has-messages');
        notificationContent.innerHTML = `<p>You have new messages!</p>`;
    }

    bellIcon.addEventListener('click', () => {
        if (notificationContent.style.display === 'block') {
            notificationContent.style.display = 'none';
        } else {
            notificationContent.style.display = 'block';
        }
    });

    // Close notification content if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target !== bellIcon && !bellIcon.contains(event.target) && event.target !== notificationContent && !notificationContent.contains(event.target)) {
            notificationContent.style.display = 'none';
        }
    });
});

