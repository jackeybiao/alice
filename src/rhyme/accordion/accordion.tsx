import React from 'react';
import { AccordionProps } from './type';


export const Accordion = (props: AccordionProps) => {
    const { children } = props

    const handleKeyDown = (event:React.KeyboardEvent<HTMLDivElement>) => {
        var target = event;
        var key = event.keyCode.toString();
    
        console.log(key);
        console.log(target);
    }
    return (
        <div onKeyDown={(e)=>{handleKeyDown(e)}} className="accordion">
            {children}
        </div>
    )
}


