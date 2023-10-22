import { render as renderToString } from '../../../entries/server';

export const render = (req, res) => {
    /**
     * Each Service could run business logic on a middleware
     * Enrich App with prepared props.
     */
    const props = {
        name: 'B'
    };

    const app = renderToString(props);

    const hydrateHtml = `
        <script>
            window.hydrate(${JSON.stringify(props)})
        </script>
    `;

    const html = `
        <html lang="en">
        <head>
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="./client/index.js"></script>
            ${hydrateHtml}
        </body>
        </html>
    `;

    res.send(html);
}