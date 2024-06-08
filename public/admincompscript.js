import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

// Firebase configuration
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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', () => {
    const complaintsList = document.getElementById('complaints-list');
    const complaintsRef = ref(database, 'complaints');

    onValue(complaintsRef, (snapshot) => {
        const complaints = snapshot.val();
        complaintsList.innerHTML = ''; // Clear the list first
        for (let id in complaints) {
            const complaint = complaints[id];
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>Complaint:</strong> ${complaint.text}<br><strong>Date:</strong> ${complaint.date}`;
            complaintsList.appendChild(listItem);
        }
    });
});
