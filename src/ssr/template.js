// Template for server side rendering
export default ({ body, title, state }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="/styles.css" rel="stylesheet" />
      </head>
      
      <body>
        <div id="root">${body}</div>
        
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\\u003c')}
        </script>
        <script src="/app.js"></script>
      </body>
    </html>
  `;
};
