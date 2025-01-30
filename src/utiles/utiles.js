export const validateEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = password => {
    const lengthCheck = password?.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    const isValid = lengthCheck && uppercaseCheck && lowercaseCheck && numberCheck && specialCharCheck;
  
    let message = '';
    if (!lengthCheck) message += '\n- Password must be at least 8 characters long.';
    if (!uppercaseCheck) message += '\n- Include at least one uppercase letter.';
    if (!lowercaseCheck) message += '\n- Include at least one lowercase letter.';
    if (!numberCheck) message += '\n- Include at least one number.';
    if (!specialCharCheck) message += '\n- Include at least one special character (e.g., !, @, #).';
  
    return { isValid, message: isValid ? '' : `Please follow these guidelines to create a strong password: ${message}` };
  };