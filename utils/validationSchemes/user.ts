export const createUserValidationSchema = {
  username: {
    presence: true,
    length: {
      minimum: 4,
      message: 'must be at least 4 characters',
    },
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 4,
      message: 'must be at least 4 characters',
    },
  },
  confirmPassword: {
    presence: true,
    equality: 'password',
  },
};
