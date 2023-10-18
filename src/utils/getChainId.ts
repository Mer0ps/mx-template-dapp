import { chainIdByEnvironment } from '@merops/sdk-dapp/constants/network';
import { environment } from 'config';

export const getChainId = () => {
  return chainIdByEnvironment[environment];
};
