import React, { useState, useEffect } from 'react';
import { fetchBots } from './ApiMock.jsx';

const List = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetchBots().then((res) => setArray(res));
  }, []);

  return (
    <>
      {array.map((elem) => (
        <div>{elem.name}</div>
      ))}
    </>
  );
};

export default List;
