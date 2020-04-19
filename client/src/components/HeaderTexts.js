import React from 'react';
import { Header } from 'semantic-ui-react';

const HeaderTexts = ({ account }) => {
  return (
    <>
      <Header as="h2">Hello, your ethereum account is: {account}</Header>
      <Header as="h3" color="orange">
        Make sure you are in Rinkeby network, configure MetaMask appropriately
      </Header>
      <Header as="h3">
        You need eth to sign the petition, you can go to{' '}
        <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a> to
        get some eth or DM me via +84393259607 on Whatsapp
      </Header>
      <Header as="h4">
        For teacher, you can check the name of each address by clicking on one
        of the address
      </Header>
    </>
  );
};

export default HeaderTexts;
