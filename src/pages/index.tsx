/* eslint-disable no-tabs */
import styled from '@emotion/styled';
import Title from '@src/assets/title.svg';
import Button from '@src/components/common/Button';
import Navbar from '@src/components/common/Navbar';
import Toast from '@src/components/common/Toast';
import { connectMetamask } from '@src/utils/connectWallet';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const handleClick = () => {
    const owner = typeof window !== undefined && localStorage.getItem('ownerAddress');

    if (!owner) {
      alert('Connect your metamask first!');

      return;
    }
    router.push('/mint');
  };

  return (
    <Styled.Page className="bg-[url('../assets/background/main.png')] bg-cover bg-bottom">
      <Head>
        <title>Scam Scan</title>
        <meta name="description" content="Scam Scan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="text-center text-white w-fit m-auto h-screen grid content-center bg-[url('../assets/background/main.png')] bg-cover bg-bottom	">
        <div className="w-fit m-auto">
          <Title />
        </div>
        <p className="text-3xl font-normal opacity-60	mt-8 mb-16">
          Mint bad reputation as Soul Bound Token to scammers. <br />
          Protect your precious assets.
        </p>
        <div className="m-auto  mb-12">
          <Button _onClick={handleClick}>Mint</Button>
        </div>
      </div>
    </Styled.Page>
  );
};

export default Home;

const Styled = {
  Page: styled.div`
    h1 {
      font-family: 'Syne';
    }
    width: 100vw;
    & > * {
      width: 100%;
    }
  `,
};
