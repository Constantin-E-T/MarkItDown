// Validate the user's input if is a valid GitHub username
exports.validateGithubUsername = (value) => {
  if (value) {
    // Check if the username is in a valid format
    const isValidUsername = /^([a-z\d]+-)*[a-z\d]+$/i.test(value);
    if (isValidUsername) {
      return true;
    } else {
      return "Please enter a valid GitHub username.";
    }
  } else {
    return "Please enter a GitHub username.";
  }
};

// Validate the user's input if is a valid email address
exports.validateEmail = (value) => {
  if (value) {
    // Check if the email is in a valid format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (isValidEmail) {
      return true;
    } else {
      return "Please enter a valid email address.";
    }
  } else {
    return "Please enter an email address.";
  }
};

// Validate the user's input if is a valid project title
exports.validateProjectTitle = (value) => {
    if (value) {
      return true;
    } else {
      return "Please enter a title for your project.";
    }
  };
  
