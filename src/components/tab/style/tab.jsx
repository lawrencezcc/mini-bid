'use strict';

import React, { useEffect, useRef } from "react";
import EventBus from '../../utils/eventBus';

export default class Tab extends React.Component {
    constructor(props){
        super(props);

        let classNames = props.classNames || '';
        if (Array.isArray(classNames)) {
            classNames = `tab ${classNames.join(' ')}`;
        }
        this.tabRef = React.createRef();

        this.state = {
            classNames
        };
    }

    componentDidMount() {
        const eventBus = new EventBus({el: inputRef, events: props.events});
        if (eventBus) {
            eventBus.attachEvents();
        }
    }

    render() {
        return  <div ref={tabRef} className={this.state.classNames}></div>;
    }
};
