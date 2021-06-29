export const parseUser = str => {
    try {
      return JSON.parse(str);
    } catch (error) {
      return null;
    }
  };
  
  console.log(parseUser('{"name": "IronMan"}'));
  console.log(parseUser('some text'));