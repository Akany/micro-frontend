import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from '../../page';

const hydrate = (props) => {
    const domNode = document.getElementById('root');
    hydrateRoot(domNode, <App {...props}/>);
}

window.hydrate = hydrate;