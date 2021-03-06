import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import useStakingCalculations from 'sections/staking/hooks/useStakingCalculations';

import { formatPercent } from 'utils/formatters/number';

import { BarStatBox, BarHeaderSection, BarTitle, BarValue, StyledProgressBar } from './common';

const CRatioBarStats: FC = () => {
	const { t } = useTranslation();

	const {
		percentageCurrentCRatio,
		percentageTargetCRatio,
		percentCurrentCRatioOfTarget,
	} = useStakingCalculations();

	return (
		<StyledBarStatBox>
			<BarHeaderSection>
				<BarTitle>{t('navbar.bars.c-ratio')}</BarTitle>
				<BarValue>{formatPercent(percentageCurrentCRatio)}</BarValue>
			</BarHeaderSection>
			<StyledProgressBar
				percentage={
					percentCurrentCRatioOfTarget.isNaN() ? 0 : percentCurrentCRatioOfTarget.toNumber()
				}
				variant="blue-pink"
			/>
			<BarHeaderSection>
				<BarTitle>{t('navbar.bars.t-ratio')}</BarTitle>
				<StyledBarValue>{formatPercent(percentageTargetCRatio)}</StyledBarValue>
			</BarHeaderSection>
		</StyledBarStatBox>
	);
};

const StyledBarStatBox = styled(BarStatBox)`
	margin-bottom: 18px;
`;
const StyledBarValue = styled(BarValue)`
	color: ${(props) => props.theme.colors.gray};
`;

export default CRatioBarStats;
