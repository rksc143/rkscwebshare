document.getElementById('file-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let fileInput = document.getElementById('file-input');
    let file = fileInput.files[0];

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    document.getElementById('upload-status').innerHTML = 'Uploading file...';

    // Simulate file upload process
    setTimeout(() => {
        document.getElementById('upload-status').innerHTML = 'File uploaded successfully!';
    }, 2000);  // Simulating a 2 second upload delay
});
