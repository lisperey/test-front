"use client"
import { styled } from "styled-components";

import LogoIcon  from "@/components/logo-icon";

interface HeaderLogoProps{

}

const TagHeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export function HeaderLogo(props: HeaderLogoProps){
    return(
        <header>
            <TagHeaderLogo><LogoIcon/></TagHeaderLogo>
        </header>
    )
}