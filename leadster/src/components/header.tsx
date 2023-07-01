"use client"
import { styled } from "styled-components";
import AssentHeaderIcon  from "@/components/asset-header-icon";

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;  
    justify-content: center;
    height: 50vh;
    padding: 10px;
    background-color: var(--bg-secondery);
    font-family: inherit;
`
const TagTitle1 = styled.div`
    border: solid 0.8px #0087ff;
    color: #0087ff;
    font-family: inherit;
    font-size:4px;
    text-align: center;
    padding:3px 6px 2px 6px;
    border-radius: 20px 20px 20px 3px;

`
const TagTitle2 = styled.div`
    border: none;
    color: #1c3c50;
    font-size:13px;
    text-align: center;
    padding-top: 3px;

`
const TagTitle3 = styled.div`
    border-bottom: solid 0.3px rgba(0, 0, 0.1, 0.2);
    color: #0084ff;
    font-size:26px;
    text-align: center;
    padding-bottom: 6px;
    display:flex;
    align-items: start;
   
`
const TagTitle4 = styled.div`
    color: #1c3c50;
    font-size:5px;
    text-align: center;
    margin-top: 6px;
    
    `
const AssetHeader = styled.span`
    margin: -13.3px -9px 1px;
 
`


export function Header(props: HeaderProps){
    return(
        <header>
            
            <TagHeader>
                <TagTitle1>WEBINARS EXCLUSIVOS</TagTitle1>
                <TagTitle2>Menos Conversinha,</TagTitle2>
                <TagTitle3>Mais Conversão <AssetHeader><AssentHeaderIcon/></AssetHeader></TagTitle3>
                <TagTitle4>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</TagTitle4>
            </TagHeader>
        </header>
    )
}