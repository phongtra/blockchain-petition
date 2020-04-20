import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Container, Button } from 'semantic-ui-react';
import { SC_ADDRESS, VOTE_ABI } from './config';
import Petition from './components/Petition';
import HeaderTexts from './components/HeaderTexts';
import AddressList from './components/AddressList';
import ForceInstallation from './components/ForceInstallation';

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [account, setAccount] = useState('');
  const [notInstall, setNotInstall] = useState(false);
  const [name, setName] = useState('');
  const [vote, setVote] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const loadBlockchainData = async () => {
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      alert(
        'Please install MetaMask extension for chrome before using this site'
      );
      setNotInstall(true);
    } else {
      // console.log(Web3.givenProvider);
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const acc = await window.web3.eth.getAccounts();
      setAccount(acc[0]);
      const voteContract = new window.web3.eth.Contract(VOTE_ABI, SC_ADDRESS);
      setVote(voteContract);
    }
  };
  useEffect(() => {
    loadBlockchainData();
    const loadVoteCount = async () => {
      const voteContract = new window.web3.eth.Contract(VOTE_ABI, SC_ADDRESS);
      setVote(voteContract);
    };
    loadVoteCount();
  }, []);
  const onVoteCheck = async () => {
    try {
      const count = await vote.methods.votes().call();
      alert('There are ' + count + ' votes');
    } catch (e) {
      alert('You must be on Rinkeby network');
    }
  };
  const onVote = async () => {
    if (!name) {
      return alert('Must input name');
    }
    vote.methods
      .vote(name)
      .send({ from: account })
      .once('receipt', (receipt) => {
        alert('Success. You signed as ' + name);
        setName('');
      })
      .on('error', (error) => {
        if (
          error.message ===
          'MetaMask Tx Signature: User denied transaction signature.'
        ) {
          alert(error.message);
        } else
          alert(
            'You cannot sign the petition twice and you must be on Rinkeby network'
          );
      });
  };
  const onGetAddresses = async () => {
    setFetching(true);
    try {
      const addresses = await vote.methods.addressList().call();
      setAddresses(addresses);
      setFetching(false);
      if (addresses.length) alert('Addresses fetched');
      else alert('No address has signed this petition');
    } catch {
      alert('You must be on Rinkeby network');
      setFetching(false);
    }
  };
  const onCheckName = async (address) => {
    const name = await vote.methods.nameFromAddress(address).call();
    alert('The address: ' + address + ' belong to ' + name);
  };
  if (notInstall) {
    return <ForceInstallation />;
  }
  return (
    <Container>
      <HeaderTexts account={account} />
      <Button onClick={onVoteCheck}>Check vote count</Button>
      <Petition name={name} setName={setName} onVote={onVote} />
      <Button
        loading={fetching}
        color="green"
        onClick={onGetAddresses}
        content="View signees"
      />
      <AddressList onCheckName={onCheckName} addresses={addresses} />
    </Container>
  );
};

export default App;
