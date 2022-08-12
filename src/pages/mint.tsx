/* eslint-disable react-hooks/rules-of-hooks */
import styled from '@emotion/styled';
import Intro from '@src/components/common/Intro';
import Navbar from '@src/components/common/Navbar';
import Toast from '@src/components/common/Toast';
import MintResultModal from '@src/components/Mint/MintResultModal';
import MintForm from '@src/components/MintForm';
import { INTRO_INFO } from '@src/constants';
import { flexColumn } from '@src/styles';
import { Status } from '@src/types';
import { mintSBT } from '@src/utils/mintSBT';
import React, { useEffect, useState } from 'react';

function mint() {
  const [isToast, setIsToast] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const [status, setStatus] = useState<Status>('IDLE');
  const handleClick = async () => {
    try {
      setStatus('LOADING');
      setIsSubmit(true);
      if (typeof window !== undefined) {
        const from = localStorage.getItem('ownerAddress');
        const to = localStorage.getItem('targetAddress');
        const score = Number(localStorage.getItem('point'));
        const transactionId = localStorage.getItem('transactionId');
        const reason = localStorage.getItem('reason');
        const matic = Number(localStorage.getItem('matic'));

        console.log('>>최종값', from, to, score, transactionId, reason, matic);
        const result = await mintSBT({
          from,
          to,
          score,
          transactionId,
          reason,
          matic,
        });

        console.log('>>result', result);

        setStatus('SUCCESS');
      }
    } catch (e) {
      console.log(e);
      setStatus('ERROR');
    }
  };

  const handleClose = () => {
    // setIsSubmit(false);
  };

  return (
    <StyledRoot>
      <Navbar />
      {isToast && <Toast _onClick={() => setIsToast(false)} />}
      <Intro.Title>{INTRO_INFO.MINT.TITLE}</Intro.Title>
      <Intro.Description>{INTRO_INFO.MINT.DESCRIPTION}</Intro.Description>
      <MintForm setIsToast={setIsToast} setIsSubmit={setIsSubmit} />
      {isSubmit && (
        <StModalWrapper className="fixed z-10" onClick={handleClose}>
          <MintResultModal status={status} handleClick={handleClick} />
        </StModalWrapper>
      )}
    </StyledRoot>
  );
}

export default mint;

const StyledRoot = styled.section`
  width: 100%;
  height: 1919px;
  background-size: 1919px;
  ${flexColumn}
  background-image: url('MintingBackground.png');
  & h1 {
    margin-top: 209px;
  }
  & form {
    margin-top: 80px;
    ${flexColumn}
    & > button {
      margin-top: 80px;
    }
  }
`;

const StModalWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;
