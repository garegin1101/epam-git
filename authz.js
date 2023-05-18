// Sample user object with role
const user = {
    username: 'john',
    role: 'admin',
  };
  
  // Function to check user authorization
  function checkAuthorization(user, allowedRoles) {
    // Check if user's role is included in the allowed roles
    return allowedRoles.includes(user.role);
  }
  
  // Usage example
  const allowedRoles = ['admin', 'editor'];
  
  if (checkAuthorization(user, allowedRoles)) {
    console.log('User is authorized');
  } else {
    console.log('User is not authorized');
  }