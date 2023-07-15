import { useState, useEffect } from "react";

interface PasswordValidationResult {
  password: string;
  isValid: boolean;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const usePasswordValidation = (
  initialPassword: string
): PasswordValidationResult => {
  const [password, setPassword] = useState(initialPassword);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validatePassword(password));
  }, [password]);

  const validatePassword = (password: string): boolean => {
    // Perform your password validation logic here
    // This is just a basic example, you can customize it as per your requirements

    // Password must have at least 8 characters
    if (password.length < 8) {
      return false;
    }

    // Password must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Password must contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // Password must contain at least one digit
    // if (!/\d/.test(password)) {
    //   return false;
    // }

    // All validation checks passed
    return true;
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  return {
    password,
    isValid,
    handlePasswordChange,
  };
};

export default usePasswordValidation;
