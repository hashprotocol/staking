import axios from 'axios';
import { useQuery, QueryConfig } from 'react-query';
import { ethers } from 'ethers';
import { useRecoilValue } from 'recoil';

import synthetix from 'lib/synthetix';
import QUERY_KEYS from 'constants/queryKeys';
import { appReadyState } from 'store/app';

import Connector from 'containers/Connector';
import { yearnSNXVault } from 'contracts';
import {
	walletAddressState,
	isWalletConnectedState,
	networkState,
	isMainnetState,
} from 'store/wallet';

import { LiquidityPoolData } from './types';
import { toBigNumber } from 'utils/formatters/number';
import BigNumber from 'bignumber.js';

export type YearnVaultData = Omit<LiquidityPoolData, 'balance'> & {
	apy: number;
	tvl: number;
	pricePerShare: number;
	stakedSNX: BigNumber;
};

const useYearnSNXVaultQuery = (options?: QueryConfig<YearnVaultData>) => {
	const isAppReady = useRecoilValue(appReadyState);
	const isWalletConnected = useRecoilValue(isWalletConnectedState);
	const walletAddress = useRecoilValue(walletAddressState);
	const network = useRecoilValue(networkState);
	const isMainnet = useRecoilValue(isMainnetState);
	const { provider } = Connector.useContainer();
	const {
		contracts: { Synthetix },
	} = synthetix.js!;

	return useQuery<YearnVaultData>(
		QUERY_KEYS.LiquidityPools.yearnSNX(walletAddress ?? '', network?.id!),
		async () => {
			const YearnSNXVault = new ethers.Contract(
				yearnSNXVault.address,
				// @ts-ignore
				yearnSNXVault.abi,
				provider as ethers.providers.Provider
			);

			const [
				yvSNXUserBalance,
				yvSNXPricePerShare,
				allVaultsData,
				snxAllowance,
				snxBalance,
			] = await Promise.all([
				YearnSNXVault.balanceOf(walletAddress, { gasLimit: 1e6 }),
				YearnSNXVault.pricePerShare({ gasLimit: 1e5 }),
				axios.get('https://api.yearn.finance/v1/chains/1/vaults/all'),
				Synthetix.allowance(walletAddress, yearnSNXVault.address),
				Synthetix.transferableSynthetix(walletAddress),
			]);

			const [pricePerShare, allowance, userBalance] = [
				yvSNXPricePerShare,
				snxAllowance,
				snxBalance,
			].map((data) => Number(synthetix.js?.utils.formatEther(data)));

			const stakedBN = toBigNumber(yvSNXUserBalance.toString()).div(1e18);

			const yvSNXVaultData = allVaultsData?.data.find(
				(vault: any) => vault.symbol === 'yvSNX' && vault.type === 'v2'
			);
			const apy = yvSNXVaultData?.apy?.net_apy ?? 0;
			const tvl = Number(yvSNXVaultData?.tvl?.tvl) ?? 0;

			return {
				address: yearnSNXVault.address,
				userBalance: userBalance,
				userBalanceBN: toBigNumber(userBalance),
				distribution: 0,
				duration: 0,
				periodFinish: Date.now() * 2, // never expires
				rewards: 0,
				staked: stakedBN.toNumber(),
				stakedBN: stakedBN,
				stakedSNX: stakedBN.times(pricePerShare),
				allowance,
				apy,
				tvl,
				pricePerShare,
			};
		},
		{
			enabled: isAppReady && isWalletConnected && isMainnet,
			...options,
		}
	);
};

export default useYearnSNXVaultQuery;
