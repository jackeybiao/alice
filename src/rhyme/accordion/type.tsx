import { ReactNode } from 'react';

export type AccordionProps = {
    id: string
    children: ReactNode
}

export type PanelProps = {
    isExpanded?: boolean
    tabindex:number
    title:string
    children: ReactNode
}
