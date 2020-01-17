import React from 'react';
import { Accordion } from '../../rhyme/accordion/accordion';
import { Panel } from '../../rhyme/accordion/panel';


const Rhyme = () => {
    return (
        <div className="container">
           <Accordion id="accordionGroup">
                <Panel title="this is text" key={0} isExpanded tabindex={0}>
                    <div>thsi is text</div>
                </Panel>
                <Panel title="this is text" key={1} tabindex={1}>
                    <div>thsi is text</div>
                </Panel>
           </Accordion>
        </div>
    )
}


export default Rhyme;
