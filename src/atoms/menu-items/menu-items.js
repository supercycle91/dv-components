import styled from 'styled-components';
import { space } from 'styled-system';
import { fontSize } from 'utils';
import { Icon } from 'atoms';
import { source } from 'react-aim';

export const MenuLinks = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;

	${fontSize};
	${space};
`;

export const MenuButtons = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;

	& > * {
		margin-right: 8px;
	}

	& > *:last-of-type {
		margin-right: 0;
	}

	${space};
`;

export const MegaMenuIcon = styled(Icon).attrs({
	name: 'chevronDown',
	iconSize: 'sm',
	type: 'outline'
})`
	transform: rotate(-90deg);
`;
