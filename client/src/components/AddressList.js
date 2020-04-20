import React, { Fragment } from 'react';

const AddressList = ({ addresses, onCheckName }) => {
  return (
    <>
      {addresses.length ? (
        <>
          <br />
          {addresses.map((add) => (
            <Fragment key={add}>
              <button onClick={() => onCheckName(add)}>{add}</button>
              <br />
            </Fragment>
          ))}
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default AddressList;
