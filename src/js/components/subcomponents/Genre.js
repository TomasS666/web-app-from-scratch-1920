import { createAndAppend } from "../../helpers/createAndAppend.js";

import {
    getData
} from "../../helpers/data/getData";


function Genre(params, name){
    console.log("test")
    getData("discover/movie", params)
        .then(data => data.json())
        .then(jsonData => {
            console.log(jsonData)
            
            const section = createAndAppend("section", document.querySelector("main"));
            section.setAttribute("data-genre-name", name)
            jsonData.results.forEach(obj => {
                
                const article = createAndAppend("article", section);
             
                createAndAppend(          
                    "h1",
                    article,
                    obj.title
                );
                const image = createAndAppend(          
                    "img",
                    article
                );
            
                    image.src = `https://image.tmdb.org/t/p/w342/${obj.poster_path}`;
            
                    section.append(article)
            })
        })
} 


export { Genre }