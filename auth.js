// Function to authenticate user
function authenticate(username, password) {
    // Find user with matching credentials
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
  
    // Return true if user is found, false otherwise
    return !!user;
  }
// Sample user credentials
const users = [
    { username: 'john', password: 'password123' },
    { username: 'jane', password: 'secret456' },
  ];

  // Usage example
const username = 'john';
const password = 'password123';  

if (authenticate(username, password)) {
    console.log('Authentication successful');
  } else {
    console.log('Authentication failed');
  }
