import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Container, Button } from 'semantic-ui-react';
import { SC_ADDRESS, VOTE_ABI } from './config';
import Petition from './components/Petition';
import HeaderTexts from './components/HeaderTexts';
import AddressList from './components/AddressList';
import ModalText from './components/ModalText';

const App = () => {
  const [fetching, setFetching] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [vote, setVote] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const loadBlockchainData = async () => {
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      alert(
        'Please install MetaMask extension for chrome before using this site'
      );
      window.web3 = new Web3(
        new Web3.providers.HttpProvider(
          'https://rinkeby.infura.io/v3/ac9126c9073b4e1786b5f7139c5a2b21'
        )
      );
    } else {
      // console.log(Web3.givenProvider);
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const acc = await window.web3.eth.getAccounts();
      setAccount(acc[0]);
    }
    // const voteContract = new window.web3.eth.Contract(VOTE_ABI, SC_ADDRESS);
    // setVote(voteContract);
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
    console.log(vote);
    try {
      const count = await vote.methods.votes().call();
      alert('There are ' + count + ' votes');
    } catch (e) {
      console.error(e);
      alert('You must be on Rinkeby network');
    }
  };
  const onVote = async () => {
    if (!name) {
      return alert('Must input name');
    }
    setSubmitting(true);
    vote.methods
      .vote(name)
      .send({ from: account })
      .once('receipt', (receipt) => {
        alert('Success. You signed as ' + name);
        setName('');
        setSubmitting(false);
      })
      .on('error', (error) => {
        if (
          error.message ===
          'MetaMask Tx Signature: User denied transaction signature.'
        ) {
          alert(error.message);
          setSubmitting(false);
        } else
          alert(
            'You cannot sign the petition twice and you must be on Rinkeby network'
          );
        setSubmitting(false);
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

  return (
    <Container>
      <HeaderTexts account={account} />
      <ModalText />
      <Button onClick={onVoteCheck}>Check vote count</Button>
      <Petition
        submitting={submitting}
        name={name}
        setName={setName}
        onVote={onVote}
      />
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
