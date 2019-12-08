export default ({ status }, { message }) => {
  if (status.toString()[0] === '4') {
    throw new Error(message);
  } else if (status.toString()[0] === '5') {
    throw new Error(message);
  }
};
