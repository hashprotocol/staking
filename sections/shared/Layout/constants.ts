navbarimport ROUTES from 'constants/routes';

export type SubMenuLink = {
	i18nLabel: string;
	subLink: string;
};

export type MenuLink = {
	i18nLabel: string;
	link: string;
	subMenu?: SubMenuLink[];
};

export type MenuLinks = MenuLink[];

export const MENU_LINKS: MenuLinks = [
	{
		i18nLabel: 'navbar.dashboard',
		link: ROUTES.Home,
	},
	{
		i18nLabel: 'navbar.staking',
		link: ROUTES.Staking.Home,
		subMenu: [
			{
				i18nLabel: 'navbar.mint-and-burn',
				subLink: ROUTES.Staking.Home,
			},
			{
				i18nLabel: 'navbar.earn',
				subLink: ROUTES.Earn.Home,
			},
			{
				i18nLabel: 'navbar.debt',
				subLink: ROUTES.Debt.Home,
			},
		],
	},
	{
		i18nLabel: 'navbar.loans',
		link: ROUTES.Loans.Home,
	},
	{
		i18nLabel: 'navbar.gov',
		link: ROUTES.Gov.Home,
	},
	{
		i18nLabel: 'navbar.l2',
		link: ROUTES.L2.Home,
	},
	{
		i18nLabel: 'navbar.wallet',
		link: ROUTES.Escrow.Home,
		subMenu: [
			{
				i18nLabel: 'navbar.escrow',
				subLink: ROUTES.Escrow.Home,
			},
			{
				i18nLabel: 'navbar.synths',
				subLink: ROUTES.Synths.Home,
			},
			{
				i18nLabel: 'navbar.history',
				subLink: ROUTES.History.Home,
			},
			{
				i18nLabel: 'navbar.delegate',
				subLink: ROUTES.Delegate.Home,
			},
		],
	},
];

export const MENU_LINKS_L2: MenuLinks = [
	{
		i18nLabel: 'navbar.dashboard',
		link: ROUTES.Home,
	},
	{
		i18nLabel: 'navbar.staking',
		link: ROUTES.Staking.Home,
		subMenu: [
			{
				i18nLabel: 'navbar.mint-and-burn',
				subLink: ROUTES.Staking.Home,
			},
			{
				i18nLabel: 'navbar.earn',
				subLink: ROUTES.Earn.Home,
			},
		],
	},
	{
		i18nLabel: 'navbar.withdraw',
		link: ROUTES.Withdraw.Home,
	},
	{
		i18nLabel: 'navbar.wallet',
		link: ROUTES.Escrow.Home,
		subMenu: [
			{
				i18nLabel: 'navbar.escrow',
				subLink: ROUTES.Escrow.Home,
			},
			{
				i18nLabel: 'navbar.synths',
				subLink: ROUTES.Synths.Home,
			},
		],
	},
];

export const MENU_LINKS_DELEGATE: MenuLinks = [
	{
		i18nLabel: 'navbar.dashboard',
		link: ROUTES.Home,
	},
	{
		i18nLabel: 'navbar.staking',
		link: ROUTES.Staking.Home,
		subMenu: [
			{
				i18nLabel: 'navbar.mint-and-burn',
				subLink: ROUTES.Staking.Home,
			},
			{
				i18nLabel: 'navbar.earn',
				subLink: ROUTES.Earn.Home,
			},
		],
	},
];
