import React from 'react';
import { PanelProps } from './type';

import _ from 'lodash';

export const Panel = (props: PanelProps) => {

    //允许同时展开多个手风琴节
    let allowMultiple = false;
    //允许每个选项卡可以分别打开和关闭
    let allowToggle = false;

    //设置id以及aria-controls、aria-labelledby
    const accordionId = _.uniqueId('accordion-');
    const panelId = _.uniqueId('panel-');


    const { children, isExpanded } = props;

    const handleTitle = () => {

    }

    return (
        <div className="accordion-item">
            <h3>
                <button onClick={()=>{handleTitle()}} aria-expanded={isExpanded?true:false}
                    className="Accordion-trigger"
                    aria-controls={panelId}
                    id={accordionId}>
                    <span className="Accordion-title">
                        Personal Information
                        <span className="Accordion-icon"></span>
                    </span>
                </button>
            </h3>

            <div id={panelId}
                role="region"
                aria-labelledby={accordionId}
                className="Accordion-panel"
                hidden={isExpanded?true:false}>
                <fieldset>
                    {children}
                </fieldset>
            </div>
        </div>
    )
}
