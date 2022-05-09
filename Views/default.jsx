// 1. import React
const React = require('react')

// 2. create a stub function called 'Def' with one parameter called 'html'
// 4. fill 'Def' function with a return statement that includes the HTML skeleton you wish all of your pages to include
function Def (html) {
  return (
    <html>
      <head>
          <title>Title</title>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  )
}

// 3. export 'Def' function
module.exports - Def

