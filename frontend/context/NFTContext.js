import axios from 'axios';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';

import { MarketAddress, MarketAddressABI } from './constants';

export const NFTContext = React.createContext();

const fetchContract = (signerOrProvider) => new ethers.Contract(MarketAddress, MarketAddressABI, signerOrProvider);

export const NFTProvider = ({ children }) => {
  const nftCurrency = 'ETH';
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoadingNFT, setIsLoadingNFT] = useState(false);

  const fetchNFTs = async () => {
    setIsLoadingNFT(false);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/PPq6amF0yaNOJF3LlBoggF5UIzDSgnEe');
    const contract = fetchContract(provider);

    const data = await contract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
        const tokenURI = await contract.tokenURI(tokenId);
        const {
          data: { image, name, description },
        } = await axios.get(tokenURI);
        const price = ethers.utils.formatUnits(
          unformattedPrice.toString(),
          'ether',
        );

        return {
          price,
          tokenId: tokenId.toNumber(),
          id: tokenId.toNumber(),
          seller,
          owner,
          image,
          name,
          description,
          tokenURI,
        };
      }),
    );

    return items;
  };

  const fetchMyNFTsOrCreatedNFTs = async (type) => {
    setIsLoadingNFT(false);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    const data = type === 'fetchItemsListed' ? await contract.fetchItemsListed() : await contract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
        const tokenURI = await contract.tokenURI(tokenId);
        const {
          data: { image, name, description },
        } = await axios.get(tokenURI);
        const price = ethers.utils.formatUnits(
          unformattedPrice.toString(),
          'ether',
        );

        return {
          price,
          tokenId: tokenId.toNumber(),
          seller,
          owner,
          image,
          name,
          description,
          tokenURI,
        };
      }),
    );

    return items;
  };

  const createSale = async (url, formInputPrice) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(formInputPrice, 'ether');
    const contract = fetchContract(signer);
    const listingPrice = await contract.getListingPrice();

    /* resellは、使用しない予定なのでコメントアウト
    const transaction = !isReselling
      ? await contract.createToken(url, price, {
        value: listingPrice.toString(),
      })
      : await contract.resellToken(id, price, {
        value: listingPrice.toString(),
      });
    */

    // createToken
    const transaction = await contract.createToken(url, price, {
      value: listingPrice.toString(),
    });

    setIsLoadingNFT(true);
    await transaction.wait();
  };

  const buyNft = async (nft) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      MarketAddress,
      MarketAddressABI,
      signer,
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    setIsLoadingNFT(true);
    await transaction.wait();
    setIsLoadingNFT(false);
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);

  return (
    <NFTContext.Provider
      value={{
        nftCurrency,
        buyNft,
        createSale,
        fetchNFTs,
        fetchMyNFTsOrCreatedNFTs,
        connectWallet,
        currentAccount,
        isLoadingNFT,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
