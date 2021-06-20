export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
  
    imgElem.addEventListener('load', () => callback(null, imgElem));
    imgElem.addEventListener('error', () => callback('Image load is failed...'));
  };
  
  // const imgSrc =
  //   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
  
  const onImageLoaded = (error, imgElem) => {
    if (error) {
      console.log(error);
      return;
    }
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
  };
  
  // addImage(
  //   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  //   onImageLoaded
  // );
