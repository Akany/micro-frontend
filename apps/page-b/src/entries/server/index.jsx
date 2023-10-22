import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../../page';

export const render = (props) => {
    return renderToString(<App {...props}/>);
};
