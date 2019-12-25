export const validateCharacters = username => {
  if (!/^\w+$/.test(username)) {
    throw new Error('Username can only container numbers, letters, and underscores');
  }
};

export const validateCharCount = username => {
  if (username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }
};
