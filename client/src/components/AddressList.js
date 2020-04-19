import React from 'react';

const AddressList = ({ addresses, onCheckName }) => {
  return (
    <>
      {addresses.length ? (
        <ul>
          {addresses.map((add) => (
            <li key={add} onClick={() => onCheckName(add)}>
              {add}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};

export default AddressList;
