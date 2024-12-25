document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;

    // Replace DUMMY with the actual Web App URL
    const GAS_app_url = 'https://script.google.com/macros/s/AKfycbwevrA1X8Z7wrqFdH40ZUoUlJhUsw7eL_W3UWzun8rauilgDbnCoSYUD-ClH39SeTmw/exec';

    console.log('Attempting to connect to GAS:', GAS_app_url);

    try {
        const response = await fetch(GAS_app_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentName, studentId }),
        });

        console.log('Response received:', response);

        // Check if the response is okay (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Parsed response data:', data);

        // Handle success and error responses
        if (data.status === 'success') {
            document.getElementById('resultMessage').innerText =
                `Enrollment Successful! Registration ID: ${data.registrationId}`;
        } else {
            document.getElementById('resultMessage').innerText =
                `Error: ${data.error}`;
        }
    } catch (error) {
        // Improved error reporting
        console.error('Request failed:', error);
        document.getElementById('resultMessage').innerText =
            `Connection failed: ${error.message}`;
    }
});
