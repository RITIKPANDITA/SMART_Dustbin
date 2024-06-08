import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

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
    const submitComplaintButton = document.getElementById('submit-complaint');

    submitComplaintButton.addEventListener('click', () => {
        const complaintText = document.getElementById('complaint-text').value;
        const complaintDate = document.getElementById('complaint-date').value;

        if (complaintText && complaintDate) {
            const complaintRef = push(ref(database, 'complaints'));
            set(complaintRef, {
                text: complaintText,
                date: complaintDate,
                timestamp: Date.now()
            }).then(() => {
                alert('Complaint has been submitted!');
                document.getElementById('complaint-text').value = '';
                document.getElementById('complaint-date').value = '';
            }).catch((error) => {
                console.error('Error submitting complaint:', error);
            });
        } else {
            alert('Please enter a valid complaint and date.');
        }
    });
});
