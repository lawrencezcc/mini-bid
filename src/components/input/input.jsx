'use strict';

import React, { useEffect, useRef } from "react";
import EventBus from '../../utils/eventBus';

export const Input = (props) => {
    let classNames = props.classNames || '';
    if (Array.isArray(classNames)) {
        classNames = `input ${classNames.join(' ')}`;
    }

    const inputRef = useRef(null);
    useEffect(() => {
        const eventBus = new EventBus({el: inputRef, events: props.events});
        if (eventBus) {
            eventBus.attachEvents();
        }
    }, []);

    const placeholder = props.dataModel && props.dataModel.placeholder || null;

    return <input ref={inputRef} className={classNames} placeholder={placeholder} />;
};
