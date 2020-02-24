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

    Transparency.render(section, data);

    // const section = createAndAppend("section", document.querySelector("main"));
    const section = createAndAppend("section");
    const h2 = createAndAppend("h2", section);
    const wrapper = createAndAppend("div", section)
    

    section.setAttribute("data-genre-name", genreObj.name)
    h2.textContent = genreObj.name;
    wrapper.setAttribute("class", "wrapper")
    
    // Store.set("savedData", JSON.stringify(jsonData.results))

    jsonData.results.forEach(obj => {

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
    section.append(wrapper)

    document.querySelector("main").append(section)
    // })
}


const Subcomponent = {
    Movie: Movie,
    Genre: Genre
}

export {
    Subcomponent
}