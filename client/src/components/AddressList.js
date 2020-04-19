import React from 'react';

const AddressList = ({ addresses, onCheckName }) => {
  return (
    <>
      {addresses.length ? (
        <>
          <br />
          {addresses.map((add) => (
            <>
              <button key={add} onClick={() => onCheckName(add)}>
                {add}
              </button>
              <br />
            </>
          ))}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default AddressList;
