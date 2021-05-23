export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Please, fill this field',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'You have passed the limit',
});
export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Wrong email',
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: 'The password must contain at least one capital letter and one number',
});
