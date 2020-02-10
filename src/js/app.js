// Import helper Utills


import { genreList } from "./genreList";

// Import subcomponents

import {
    Genre
} from "./components/subcomponents/Genre"


function init(){

    // const genreIds = [27, 28];

    genreList.forEach(obj => {
        Genre(`with_genres=${obj.id}`, obj.name)
    })

    // Genre(`with_genres=${27}`)

    // genreList.forEach(obj => {
    //     Genre(`with_genres=${obj.id}`)

    // })

    // getData("/genre/movie/list")
    // .then(data => data.json())

    
    // genreIds.forEach(genreId => {
    //     genre(`with_genres=${genreId}`)
    // })
    
    
}

init()