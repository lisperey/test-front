"use client"

import { styled } from "styled-components";
import { FilterByType } from '@/components/filter-by-type';



interface FilterBarProps{

}

const TagFilterBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-bottom: solid 0.3px rgba(0, 0, 0.1, 0.2);
    gap: 15px;
`


export function FilterBar(props: FilterBarProps){
    return(
        <div>
        <TagFilterBar>
            <div>
            <FilterByType/>
            </div>
            <div>
                asdasd
            </div>
        </TagFilterBar>
        </div>
        
    )
}