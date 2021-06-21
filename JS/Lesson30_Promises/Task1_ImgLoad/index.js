// export 
const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
      const imgElem = document.createElement('img');
      imgElem.setAttribute('alt', 'My photo');
      imgElem.src = imgSrc;
      const containerElem = document.querySelector('.page');
      containerElem.append(imgElem);
  
      const onImageLoaded = () => {
        const { width, height } = imgElem;
        resolve({ width, height });
      };
  
      imgElem.addEventListener('load', onImageLoaded);
  
      const onError = () => reject(new Error('Image load is failed...'));
  
      imgElem.addEventListener('error', onError);
    });
  
    return p;
  };
  
  const imgSrc =
  'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';
  
  const res = addImage(imgSrc);
  console.log(res);
  res.then(data=>console.log(data));
