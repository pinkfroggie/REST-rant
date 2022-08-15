const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
         <main className="text-center">
            <h1>HOME</h1>
            <div>
              <img src="/images/ramen-pic.jpg" alt="ramen bowl" />
              <div>
                Photo by <a href="AUTHOR_LINK">Michele Blackwell</a> on <a href="UNSPLASH_LINK">Unsplash</a>
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