export const requestUserData = userId => {
    const request = new Promise((resolve, reject) => {
      if (userId === 'broken') {
        setTimeout(() => {
          reject(new Error('User not found'));
        }, 500);
      } else {
        setTimeout(() => {
          resolve({
            name: 'John',
            age: 17,
            userId: `${userId}`,
            email: `${userId}@example.com`,
          });
        }, 1000);
      }
    });
  
    return request;
  };
  
  requestUserData('userid777')
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('finally'));

    requestUserData('broken')
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('finally'));
