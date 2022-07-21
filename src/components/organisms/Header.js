import React from "react"

import styled from "styled-components"


import { Text } from '../atoms/Text'

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../atoms/Navbar'

const Menu = styled.header`
	position: absolute;
	top: 0;
	left: 0;
    right: 0;
	width: 100%;
    max-width: 1040px;
	padding: 0 1rem;
    margin: 0 auto;
	& a {
		margin: 0;
	}
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: #000; */
`

export default ( { ...props } ) => <Menu>
    <NavbarLink className="nav-link" to="/">
        <Text weight="700">pasteblock</Text>
    </NavbarLink>
	
    <NavbarContainer>
        <NavbarLinkContainer>
            <NavbarLink className="nav-link" to="/upload">
                Upload
            </NavbarLink>
        </NavbarLinkContainer>
    </NavbarContainer>

</Menu>