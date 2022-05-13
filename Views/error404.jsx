const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops! Sorry, we can't seem to find this page!</p>
        <div>
          <img src="/images/oops-monkey.jpg" alt="Monkey"/>
          <div>
            Photo by <a href="AUTHOR_LINK">Paolo Nicolello</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404