"use client"

import { FilterTypes } from "@/types/filter-types";
import { ReactNode, useState, createContext } from "react"; 


export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.AGENCIA,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterTypes) => {},
})

interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterTypes.AGENCIA)

     return(
        <FilterContext.Provider value={{search, page, type, setSearch, setPage, setType}}>
            {children}
        </FilterContext.Provider>
     )
}