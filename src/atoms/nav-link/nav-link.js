import React from 'react';
import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { space, themeGet, color } from 'styled-system';
import { darken } from 'polished';
import { fontSize } from 'utils';

const styles = css`
	${space};
	${fontSize};
	${color};
	text-align: center;
	font-weight: 600;
	letter-spacing: .03rem;
	transition: all .15s linear;
	cursor: pointer;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	background: transparent;
	border: none;

	${props => props.leftBorder ? `
		border-left: 1px solid transparent;
	` : `
		border-bottom: 1px solid transparent;
	`}
	text-decoration: none;

	&:hover {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}

	&.active {
		color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
		text-decoration: none;
		border-color: ${props => darken(0.2, themeGet('colors.primary.main')(props))};
	}
`;

const props = {
	fontSize: 2,
	py: props => props.py || 2,
	px: props => props.px || 4,
	mx: 2,
	color: props => props.color || 'gray.medium'
};

export const NavLink = styled(({
	fontSize,
	py,
	px,
	mx,
	color,
	leftBorder,
	...props
}) => <RouterLink {...props} />).attrs(props)`${styles};`;

export const NavButtonLink = styled(({
	fontSize,
	py,
	px,
	mx,
	color,
	leftBorder,
	...props
}) => <button {...props} />).attrs(props)`${styles};`;

export const NavScrollLink = styled(({
	fontSize,
	py,
	px,
	mx,
	color,
	leftBorder,
	...props
}) => <ScrollLink {...props} />).attrs(props)`${styles};`;

const mobileStyles = css`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	${'' /* justify-content: flex-start; */}

	height: 56px;
	text-align: center;
	${space};
	font-weight: 600;
	text-decoration: none;
	box-sizing: border-box;

	svg { color: #717171; }

	&.active ${NavLinkText},
	&.active svg {
		color: ${themeGet('colors.tertiary.main')};
	}
`;

const mobileProps = {
	pt: 2,
	pb: '12px',
	px: '12px'
};

export const NavLinkText = styled.div`
	text-align: left;
	width: 100%;
	color: #2b2b2b;
	text-decoration: none;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
`;

export const MobileNavLink = styled(NavLink).attrs(mobileProps)`${mobileStyles}`;
export const MobileNavButtonLink = styled(NavButtonLink).attrs(mobileProps)`${mobileStyles}`;
