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


import { cleanObjects } from '../../helpers/data/cleaning'

function Movie(id) {
    console.log(id + "fwefe")

    return getData(`movie/${id}`)
        .then(data => data.json())
        .then(movie => {
           
            console.log(movie)

            const section = createAndAppend("section");
            // const article = createAndAppend("article", section)

          

            const article = `
            <a href="#movie/${movie.id}">
                <article>
                    <h1>${movie.title}</h1>
                    <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="${movie.title}">
                </article>
            </a>
        `;

        section.insertAdjacentHTML("afterbegin", article)

            return section;

        })

}



// console.log(fakeData)

function Genre(params, genreObj) {
    console.log("test")
    
   return( getData("discover/movie", params)
        .then(data => data.json())
        .then(json => cleanObjects(json.results, ["id", "title", "poster_path"]))
        .then(jsonData => {
            
        console.log(jsonData)
    // const jsonData = fakeData;

    // const section = createAndAppend("section", document.querySelector("main"));
    const section = createAndAppend("section");
    const h2 = createAndAppend("h2", section);
    const wrapper = createAndAppend("div", section)
    

    section.setAttribute("data-genre-name", genreObj.name)
    h2.textContent = genreObj.name;
    wrapper.setAttribute("class", "wrapper")
    
    // Store.set("savedData", JSON.stringify(jsonData.results))

jsonData.map(obj => {

        // const link = createAndAppend(
        //     "a",
        //     wrapper
        // )

       

        const article = `
            <a href="#movie/${obj.id}">
                <article>
                    <h3>${obj.title}</h3>
                    <img src="https://image.tmdb.org/t/p/w342/${obj.poster_path}" alt="${obj.title}">
                </article>
            </a>
        `;

        wrapper.insertAdjacentHTML("afterbegin", article)

        // const article = createAndAppend(
        //     "article", 
        //     link
        // );


        // const h3 = createAndAppend(
        //     "h3",
        //     article,
        //     obj.title
        // );

        // link.setAttribute("href", `#movie/${obj.id}`)
        // const image = createAndAppend(
        //     "img",
        //     article
        // );

        // image.src = `https://image.tmdb.org/t/p/w342/${obj.poster_path}`;


    })
    console.log(section)
    return section;
    // section.append(wrapper)

    // document.querySelector("main").append(section)
    document.querySelector('[data-element="loading-popup"]').classList.remove("loading")
    }))
}


const Subcomponent = {
    Movie: Movie,
    Genre: Genre
}

export {
    Subcomponent
}