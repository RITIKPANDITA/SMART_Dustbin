import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
const db = getFirestore(app);

// Request collection and complaint handling
document.addEventListener('DOMContentLoaded', () => {
    const requestButton = document.getElementById('request-collection');
    const submitDateButton = document.getElementById('submit-date');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const submitComplaintButton = document.getElementById('submit-complaint');

    requestButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    submitDateButton.addEventListener('click', async () => {
        const collectionDate = document.getElementById('collection-date').value;
        if (collectionDate) {
            try {
                // Add the collection request to Firestore
                await addDoc(collection(db, "collection_requests"), {
                    date: collectionDate,
                    timestamp: Date.now()
                });
                alert(`Collection request has been sent for ${collectionDate}!`);
                modal.style.display = 'none';
            } catch (error) {
                console.error('Error submitting collection request:', error);
                alert('Error submitting collection request.');
            }
        } else {
            alert('Please enter a valid date.');
        }
    });

    submitComplaintButton.addEventListener('click', async () => {
        const complaintText = document.getElementById('complaint-text').value;
        const complaintDate = document.getElementById('complaint-date').value;
        if (complaintText && complaintDate) {
            try {
                // Add the complaint to Firestore
                await addDoc(collection(db, "complaints"), {
                    text: complaintText,
                    date: complaintDate,
                    timestamp: Date.now()
                });
                alert('Complaint has been submitted!');
                document.getElementById('complaint-text').value = '';
                document.getElementById('complaint-date').value = '';
            } catch (error) {
                console.error('Error submitting complaint:', error);
                alert('Error submitting complaint.');
            }
        } else {
            alert('Please enter both complaint text and date.');
        }
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
