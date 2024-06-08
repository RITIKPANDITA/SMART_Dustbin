// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDLC75yZk9tIonnQ0yxcsElE3_QtmCOzY",
    authDomain: "loginform-8d2bc.firebaseapp.com",
    projectId: "loginform-8d2bc",
    storageBucket: "loginform-8d2bc.appspot.com",
    messagingSenderId: "819717137890",
    appId: "1:819717137890:web:d540a98d8fd09a46f005bb"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener("DOMContentLoaded", function() {
    const requestButton = document.getElementById('request-collection');
    const submitDateButton = document.getElementById('submit-date');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    
    requestButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    submitDateButton.addEventListener('click', function() {
        const collectionDate = document.getElementById('collection-date').value;
        if (collectionDate) {
            const requestId = database.ref('collection_requests').push().key;
            database.ref('collection_requests/' + requestId).set({
                date: collectionDate,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(() => {
                alert('Collection request submitted!');
                modal.style.display = 'none';
            }).catch((error) => {
                console.error('Error submitting request:', error);
            });
        } else {
            alert('Please select a date.');
        }
    });
});
