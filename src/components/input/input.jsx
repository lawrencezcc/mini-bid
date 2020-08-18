'use strict';

import React, { useEffect, useRef } from "react";
import EventBus from '../../utils/eventBus';

export const Input = (props) => {
    let classNames = 'input';
    let classNames = props.classNames || '';
    if (Array.isArray(classNames)) {
        classNames = `classNames ${classNames.join(' ')}`;
    }

    const inputRef = useRef(null);
    useEffect(() => {
        const eventBus = new EventBus({el: inputRef, events: props.events});
        if (eventBus) {
            eventBus.attachEvent(inputRef);
        }
    }, []);

    const placeholder = props.options && props.options.placeholder || null;

    return <input ref={inputRef} className={classNames} placeholder={placeholder} />;
};
