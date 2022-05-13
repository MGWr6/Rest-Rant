// 1. import React
const React = require('react')

// 2. create a stub function called 'Def' with one parameter called 'html'
// 4. fill 'Def' function with a return statement that includes the HTML skeleton you wish all of your pages to include
function Def (html) {
  return (
    <html>
      <head>
          <title>Title</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      </head>
      <body>
        {html.children}
      </body>
    </html>
  )
}

// 3. export 'Def' function
module.exports = Def