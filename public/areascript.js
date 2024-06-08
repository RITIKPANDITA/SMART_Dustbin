// Use the CDN URLs that do not use ES6 modules
const firebaseConfig = {
    apiKey: "AIzaSyCZOF9TLp6uEDGDDBvVOfLAGHl03Rm88fw",
    authDomain: "smart-dustbin-50eec.firebaseapp.com",
    databaseURL: "https://smart-dustbin-50eec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-dustbin-50eec",
    storageBucket: "smart-dustbin-50eec.appspot.com",
    messagingSenderId: "1040922628781",
    appId: "1:1040922628781:web:7b3bd8949e97b51afa6c24",
    measurementId: "G-TP4WKVQV1B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", function() {
    const complaintsContainer = document.getElementById('complaints-container');

    // Function to display complaints
    function displayComplaint(complaint) {
        const complaintElement = document.createElement('div');
        complaintElement.classList.add('card', 'mb-3');
        complaintElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Complaint</h5>
                <p class="card-text">${complaint.text}</p>
                <p class="card-text"><small class="text-muted">Submitted on ${new Date(complaint.timestamp).toLocaleDateString()}</small></p>
            </div>
        `;
        complaintsContainer.appendChild(complaintElement);
    }

    // Fetch and display complaints
    db.collection("complaints").orderBy("timestamp", "desc").onSnapshot((querySnapshot) => {
        complaintsContainer.innerHTML = ''; // Clear previous complaints
        querySnapshot.forEach((doc) => {
            displayComplaint(doc.data());
        });
    });
});
