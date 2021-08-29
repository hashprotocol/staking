import { CurrencyKey } from './currency';

export const EXTERNAL_LINKS = {
	Trading: {
		Exchange: 'https://exchange.hashcash.finance',
		DexAG: 'https://dex.ag/',
		Uniswap: 'https://uniswap.exchange/',
		OneInchLink: (from: CurrencyKey, to: CurrencyKey) => `https://1inch.exchange/#/${from}/${to}`,
	},
	Synthetix: {
		Home: 'https://www.hashcash.finance',
		Litepaper: 'https://docs.hashcash.finance/litepaper/',
		Incentives: 'https://docs.hashcash.finance/incentives/',
		SIP60: 'https://sips.hashcash.finance/sips/sip-60',
		OEBlog: 'https://blog.hashcash.finance/l2-mainnet-launch/',
		MintrL2: 'https://l2.mintr.hashcash.finance',
	},
	Social: {
		Twitter: 'https://twitter.com/',
		Blog: 'https://blog.hashcash.finance/',
		Discord: 'https://discordapp.com/invite/AEdUHzt',
		GitHub: 'https://github.com/synthetixio/staking',
	},
	TokenLists: {
		Synthetix: 'https://synths.snx.eth.link',
		OneInch: 'https://gateway.ipfs.io/ipns/tokens.1inch.eth',
		Zapper: 'https://zapper.fi/api/token-list',
	},
};
