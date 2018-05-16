

const setListLenght = () => {
  let width;
  const wWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (wWidth > 1600) {
    width = 1200;
  } else {
    width = 960;
  }
  return width;
};

export default {
  setListLenght,
};
