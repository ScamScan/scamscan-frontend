import styled from '@emotion/styled';

export interface SBTType {
  score: number;
  reason: string;
  address: string;
  addressTitle: string;
  date: string;
  transactionID: string;
}

const StyledRoot = styled.section`
  padding: 48px;
  width: 540px;
  height: 421px;
  background: #202020;
  border-radius: 20px;
  text-align: left;
`;

const Score = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  color: #ededed;
`;

const Title = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 145%;
  letter-spacing: 0.005em;
  color: #6a6a6a;
  margin-top: 20px;
`;

const Content = styled.a`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  letter-spacing: 0.001em;
  color: #ededed;
  margin-top: 2px;
  word-break: break-all;
`;

const ProfileImage = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/CheckDetailProfile.png');
  background-size: cover;
`;

export function SBT(props: SBTType) {
  return (
    <StyledRoot>
      <Score> {props.score} </Score>

      <Title className="mt-[40px]"> Reason </Title>
      <Content> {props.reason} </Content>

      <Title> {props.addressTitle} </Title>
      <div className="flex">
        <ProfileImage />
        <Content className="ml-[4px]"> {props.address} </Content>
      </div>

      <Title> Minting Date </Title>
      <Content> {props.date} </Content>

      <Title> TxId </Title>
      <Content
        className="underline text-[12px]"
        href={'https://mumbai.polygonscan.com/tx/' + props.transactionID}
      >
        {' '}
        {props.transactionID}{' '}
      </Content>
    </StyledRoot>
  );
}
