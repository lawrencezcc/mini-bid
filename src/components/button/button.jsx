'use strict';

import React, { useEffect, useRef } from "react";
import EventBus from '../../utils/eventBus';

export const Button = (props) => {
    let classNames = 'btn';
    let classNames = props.classNames || '';
    if (Array.isArray(classNames)) {
        classNames = `classNames ${classNames.join(' ')}`;
    }

    const buttonRef = useRef(null);
    useEffect(() => {
        const eventBus = new EventBus({el: buttonRef, events: props.events});
        if (eventBus) {
            eventBus.attachEvent(buttonRef);
        }
    }, []);

    return <div ref={buttonRef} className={classNames}>{props.name}</div>;
};
