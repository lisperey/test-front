"use client"
import { useFilter } from "@/app/hooks/useFilter";
import { FilterTypes } from "@/types/filter-types";
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
    const { type, setType }= useFilter();

    const handleChangeType = (value: FilterTypes) =>{
        setType(value)
    }
    return(
        <div>
            <TagButton selected={type === FilterTypes.AGENCIA} onClick={()=> handleChangeType(FilterTypes.AGENCIA)}>Agências</TagButton>
            <TagButton selected={type === FilterTypes.CHATBOT} onClick={()=> handleChangeType(FilterTypes.CHATBOT)}>Chatbot</TagButton>
            <TagButton selected={type === FilterTypes.MARKETING} onClick={()=> handleChangeType(FilterTypes.MARKETING)}>Marketing Digital</TagButton>
            <TagButton selected={type === FilterTypes.LEADS} onClick={()=> handleChangeType(FilterTypes.LEADS)}>Geração de Leads</TagButton>
            <TagButton selected={type === FilterTypes.MIDIA} onClick={()=> handleChangeType(FilterTypes.MIDIA)}>Mídia Paga</TagButton>
        </div>
    )
}