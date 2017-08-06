// Template for server side rendering
export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="/styles.css" rel="stylesheet" />
      </head>
      
      <body>
        <div id="root">${body}</div>
        
        <script src="/app.js"></script>
      </body>
    </html>
  `;
};
