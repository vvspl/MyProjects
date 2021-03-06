export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);


//   const onImageLoaded = () => {
//     const { width, height } = imgElem;
//     callback(null, { width, height });
//   };

//   imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('load', () => callback(null, imgElem));
  imgElem.addEventListener('error', () => callback('Image load is failed...'));
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';
// addImage(imgSrc,onImageLoaded);
