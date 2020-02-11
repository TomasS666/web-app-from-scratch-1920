import {
    getData
} from "../../helpers/data/getData";

import {
    createAndAppend
} from "../../helpers/createAndAppend";

import {
    fakeData
} from "../../helpers/data/fakeData";

function Movie(id) {
    console.log(id + "fwefe")

    getData(`movie/${id}`)
        .then(data => data.json())
        .then(movie => {
            console.log(movie)

            const section = createAndAppend("section", document.querySelector("main"));
            const article = createAndAppend("article", section)
            const h1 = createAndAppend("h1", article);

            h1.textContent = movie.title;

        })

}



console.log(fakeData)

function Genre(params, genreObj) {
    console.log("test")
    // getData("discover/movie", params)
    //     .then(data => data.json())
    //     .then(jsonData => {
    //         console.log(jsonData)
    const jsonData = fakeData;

    const section = createAndAppend("section", document.querySelector("main"));
    const h2 = createAndAppend("h2", section);
    const wrapper = createAndAppend("div", section)

    section.setAttribute("data-genre-name", genreObj.name)
    h2.textContent = genreObj.name;
    wrapper.setAttribute("class", "wrapper")


    jsonData.results.forEach(obj => {

        const link = createAndAppend(
            "a",
            wrapper
        )

        const article = createAndAppend("article", link);

        article.addEventListener("mouseover", (e)=>{
            console.log(e.target)
        })

        const h3 = createAndAppend(
            "h3",
            article,
            obj.title
        );

        link.setAttribute("href", `#movie/${obj.id}`)
        const image = createAndAppend(
            "img",
            article
        );

        image.src = `https://image.tmdb.org/t/p/w342/${obj.poster_path}`;


    })
    section.append(wrapper)
    // })
}


const Subcomponent = {
    Movie: Movie,
    Genre: Genre
}

export {
    Subcomponent
}