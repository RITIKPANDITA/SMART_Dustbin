document.addEventListener('DOMContentLoaded', () => {
    const requestButton = document.getElementById('request-collection');
    const submitDateButton = document.getElementById('submit-date');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    requestButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    submitDateButton.addEventListener('click', () => {
        const collectionDate = document.getElementById('collection-date').value;
        if (collectionDate) {
            alert(`Collection request has been sent for ${collectionDate}!`);
            modal.style.display = 'none';
        } else {
            alert('Please enter a valid date.');
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
