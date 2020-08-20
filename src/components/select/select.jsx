import React, { useEffect, useRef } from "react";
import EventBus from '../../utils/eventBus';

export const Select = (props) => {
    let classNames = props.classNames || '';
    if (Array.isArray(classNames)) {
        classNames = `select ${classNames.join(' ')}`;
    }

    const selectRef = useRef(null);
    useEffect(() => {
        const eventBus = new EventBus({el: selectRef, events: props.events});
        if (eventBus) {
            eventBus.attachEvents();
        }
    }, []);

    const options = (props.dataModel && props.dataModel.options) || [];

    return <select ref={selectRef} className={classNames}>{options}</select>;
};
