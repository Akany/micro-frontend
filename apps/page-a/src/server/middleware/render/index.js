import { render as renderToString } from '../../../entries/server';

export const render = (req, res) => {
    const props = {
        name: 'A'
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
            <script src="client.js"></script>
            ${hydrateHtml}
        </body>
        </html>
    `;

    res.send(html);
}