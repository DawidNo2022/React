const strContains = (firstString, scndString) => {
  if (firstString.toLowerCase().includes(scndString.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default strContains;
