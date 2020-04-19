import React from 'react';
import { Header } from 'semantic-ui-react';

const ForceInstallation = () => {
  return (
    <div>
      <Header>
        Please install Metamask extension for chrome in order to view the
        petition. A computer is required in order to sign and view the petition
      </Header>
      <p>
        Go to{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        >
          https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en
        </a>
      </p>
      <p>
        After installation, create a new wallet, and follow instruction provided
        by Metamask
      </p>
      <p>
        Make sure you are in Rinkeby Network. To change network, click on the
        fox icon on the chrome extension tab, and click on the current
        network(ie: Main Ethereum Network) and switch to Rinkeby
      </p>
      <p>
        If you have any question, please DM +84393259607 (Phong Tran),
        +358465472862 (Thao Nguyen), +358465714468 (Nghi Nguyen) on Whatsapp
      </p>
    </div>
  );
};

export default ForceInstallation;
