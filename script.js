document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
  
    const GAS_app_url = 'https://script.google.com/macros/s/AKfycbwevrA1X8Z7wrqFdH40ZUoUlJhUsw7eL_W3UWzun8rauilgDbnCoSYUD-ClH39SeTmw/exec'

    try {
      const response = await fetch(GAS_app_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentName, studentId }),
      });
  
      const data = await response.json();
  
      // Handle success and error responses
      if (data.status === 'success') {
        document.getElementById('resultMessage').innerText =
          `Enrollment Successful! Registration ID: ${data.registrationId}`;
      } else {
        document.getElementById('resultMessage').innerText =
          `Error: ${data.error}`;
      }
    } catch (error) {
      console.error('Request failed:', error);
      document.getElementById('resultMessage').innerText =
        'Unexpected error occurred. Please try again.';
    }
  });
  