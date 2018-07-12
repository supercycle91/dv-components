import React, { Component } from 'react';
import styled from 'styled-components';
import { target } from 'react-aim';

const DropdownContainer = target()(styled.div`
	position: absolute;
	left: 20px;
	top: -10px;
	display: inline-block;

	& > ul {
		margin-top: 16px;
	}
`);

// class DropdownContainer extends Component {
// 	render = () => (
// 		<div>
// 			{this.props.children}
// 		</div>
// 	)
// }

export default DropdownContainer;
