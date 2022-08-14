export const connectMetamask = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert('install metamask first!');

      return;
    }
    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;

    if (accounts[0]) {
      localStorage.setItem('ownerAddress', accounts[0]);
    } else {
      alert('Make polygon accounts first🥲');
    }
    console.log('Connected', accounts[0]);

    return accounts[0];
  } catch (error) {
    alert('Error');
    console.log(error);
  }
};
