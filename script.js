document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
  
    try {
      // Simulate a backend call to GAS
      const mockSuccess = true; // Change to false to simulate an error
  
      let data;
      if (mockSuccess) {
        data = {
          status: 'success',
          registrationId: 'REG-1234567890',
        };
      } else {
        data = {
          status: 'error',
          error: 'Too many students',
        };
      }
  
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
  