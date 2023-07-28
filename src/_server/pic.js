const pic = (obj, keys) => {
  const findObject = {};

  for (const key of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      findObject[key] = obj[key];
    }
  }
  return findObject;
};

export default pic;
