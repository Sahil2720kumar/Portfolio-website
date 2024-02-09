"use client";
import react, { useState, createContext, useEffect } from "react";

export const HoverContext = createContext();
export function HoverContextProvider({ children }) {
    const [isHover, setIsHover] = useState(false);
    
    return (
        <HoverContext.Provider value={{ isHover,setIsHover }}>
            {children}
        </HoverContext.Provider>
    );
}
