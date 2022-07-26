const React = require('react')
const Def = require('../default')
const places = require('./models/places')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className='text-center'>
                    {places.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to rant or rave about</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}


module.exports = index;