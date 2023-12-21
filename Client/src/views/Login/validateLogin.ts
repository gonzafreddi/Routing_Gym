export interface RegisterValidationErrors {
  emailRegister?: string;
  passwordRegister?: string;
}

export interface LoginValidationErrors {
  email?: string;
}

export function validateRegister({
  emailRegister,
  passwordRegister,
}: {
  emailRegister: string;
  passwordRegister: string;
}): RegisterValidationErrors {
  let error: RegisterValidationErrors = {};
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[0-9])[a-zA-Z0-9]{6,}$/;

  if (emailRegister && !regexMail.test(emailRegister)) {
    error.emailRegister = "El email ingresado no es válido";
  }
  if (
    passwordRegister &&
    !regexPassword.test(passwordRegister)
  ) {
    error.passwordRegister =
      "La contraseña debe tener al menos 6 caracteres, incluyendo al menos un número";
  }
  return error;
}

export function validateLogin({
  email,
}: {
  email: string;
}): LoginValidationErrors {
  let error: LoginValidationErrors = {};
  const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email && !regexMail.test(email)) {
    error.email = "El email ingresado no es válido";
  }

  return error;
}