import React from "react";
import styled from 'styled-components'

const PageHeader = styled.header`

`
const Logo = styled.img`
    width: 24px;
    height: 24px;
    border: 1px solid black
`

export const HeaderWrapper = () => {
    return (
        <PageHeader>
            <Logo />
        </PageHeader>
    )
}