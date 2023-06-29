"use client"
import { styled } from "styled-components"

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color:
`

export function Header(props: HeaderProps){
    return(
        <header>
            <div>
                <TagHeader></TagHeader>
            </div>
        </header>
    )
}