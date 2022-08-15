const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                  <img className='img-resize' src="/images/404-cat.jpg" alt="image of cat" />
                <div>
                  Photo by <a href="https://unsplash.com/@miklevasilyev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikhail Vasilyev</a> on <a href="https://unsplash.com/images/animals/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
            </main>
        </def>
    )
}

module.exports = error404