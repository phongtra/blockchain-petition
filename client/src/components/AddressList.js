import React from 'react';

const AddressList = ({ addresses, onCheckName }) => {
  return (
    <>
      {addresses.length ? (
        <>
          {addresses.map((add) => (
            <button key={add} onClick={() => onCheckName(add)}>
              {add}
            </button>
          ))}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default AddressList;
