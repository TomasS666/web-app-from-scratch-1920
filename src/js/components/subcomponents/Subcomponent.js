import {
    getData
} from "../../helpers/data/getData";

import {
    createAndAppend
} from "../../helpers/createAndAppend";

import {
    fakeData
} from "../../helpers/data/fakeData";

import {
    Store
} from "../../helpers/storeData";

import {
    genreList
} from "../../genreList"


import {
    cleanObjects
} from '../../helpers/data/cleaning'

function Movie(id) {
    console.log(id + "fwefe")

    return getData(`movie/${id}`)
        .then(data => data.json())
        .then(json => {
            // console.log(json)
            // return cleanObjects(json.results, ["id", "title", "poster_path", "vote_average"])
            return json;
        })
        .then(movie => {

            console.log(movie)

            const section = createAndAppend("section");
            section.setAttribute("class", "detail-section")
            // const article = createAndAppend("article", section)

            const article = `

                <article>
                    <header>
                        <h1>${movie.title}</h1>
                    </header>
                    <figure>
                        <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="${movie.title}">
                        <figcaption>
                            <div>Genres: ${movie.genres.map(obj => obj.name).join(", ")} </div>
                            <div>${movie.overview}</div>
                        </figcaption>
                    </figure>
                </article>
            
        `;

            section.insertAdjacentHTML("afterbegin", article)

            return section;

        })

}

// const errorMapping = new Map();



// errorMapping.set("TypeError: Failed to fetch", "Sorry! Something went wrong with your network connection.")

// const errorMapping = [
//     "TypeError: Failed to fetch":connectionFail
// ]

// const ErrMsg = {
//     connectionFail: "Sorry! Something went wrong with your network connection."
// }

// console.log(fakeData)

function Genre(params, genreObj) {
    console.log(params)

    return (getData("discover/movie", `with_genres=${params}`)
            .then(response => {
                console.log(response.status)

                if (!response.ok) {
                    throw Error(response.statusText)
                } else {
                    return response;
                }
            })
            .then(data => data.json())
            .then(json => {
                return cleanObjects(json.results, ["id", "title", "poster_path", "vote_average"])
            })
            .then(jsonData => {

                console.log(jsonData)

                const section = createAndAppend("section");
                const h2 = createAndAppend("h2", section);
                const wrapper = createAndAppend("div", section)

                section.setAttribute("data-genre-name", genreObj.name)
                h2.textContent = genreObj.name;
                wrapper.setAttribute("class", "wrapper")

                // Store.set("savedData", JSON.stringify(jsonData.results))

                jsonData.map((obj, i) => {
                    const article = `
            <a href="#movie/${obj.id}">
                <article>
                    <h3>${obj.title}</h3>
                    <img src="https://image.tmdb.org/t/p/w342/${obj.poster_path}" alt="${obj.title}">
                    <div data-ui="rating">${obj.vote_average}</div>
                </article>
            </a>
        `;

                    // if(i <= 4){
                    // console.log(i)
                    wrapper.insertAdjacentHTML("afterbegin", article)
                    // }


                })

                // document.querySelector('[data-element="loading-popup"]').classList.remove("loading")
                return section;
            }))
        .catch(err => {
            console.log(err)
            // return errorMapping.get(err)
        })
}


const Subcomponent = {
    Movie: Movie,
    Genre: Genre
}

export {
    Subcomponent
}