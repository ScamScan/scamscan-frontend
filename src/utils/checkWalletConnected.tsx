export const checkWalletConnected = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('install metamask first!');

      return;
    }
    const accounts = (await ethereum.request({
      method: 'eth_accounts',
    })) as Array<string>;

    if (accounts[0]) {
      localStorage.setItem('ownerAddress', accounts[0]);
    } else {
      alert('Make polygon accounts first🥲');
    }

    return accounts[0];
  } catch (error) {
    alert('Error');
    console.log(error);
  }
};
