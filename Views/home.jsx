// 1. import React and the Def function we created in the default.jsx file
const React = require('react')
const Def = require('./default')
// The '.' at the start of the require when we require('./default') is a cue to look in the local file system to find the resource versus a npm dependency as it does when we require('react').

// 2. create a 'home' stub function and then export it
function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/pancakes.jpg" alt="Pancakes"/>
          <div>
            Photo by <a href="AUTHOR_LINK">Sam Moghadam Khamseh</a> on <a href="UNSPLASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home