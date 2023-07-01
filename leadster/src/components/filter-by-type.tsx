"use client"
import { styled } from "styled-components";

interface FilterByTypeProps{
    selected: boolean

}

const TagButton = styled.button<FilterByTypeProps>`
    border: ${props => props.selected ? 'solid 0.5px #0084ff' : 'solid 0.5px rgba(0, 0, 1, 0.7)'};
    color: ${props => props.selected ? 'white' : 'rgba(0, 0, 1, 0.7)'};
    background-color: ${props => props.selected ? '#0084ff' : ''};
    font-size:3.6px;
    text-align: center;
    padding:3px 6px 2px 6px;
    border-radius: 20px 20px 20px 20px;
    margin-right: 2px;
    cursor: pointer;

`

export function FilterByType(){
    return(
        <div>
            <TagButton selected>Agências</TagButton>
            <TagButton selected={false}>Chatbot</TagButton>
            <TagButton selected={false}>Marketing Digital</TagButton>
            <TagButton selected={false}>Geração de Leads</TagButton>
            <TagButton selected={false}>Mídia Paga</TagButton>
        </div>
    )
}