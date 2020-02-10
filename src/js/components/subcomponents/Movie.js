import { getData } from "../../helpers/data/getData";
import {
    createAndAppend
} from "../../helpers/createAndAppend";

function Movie(id){
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


export { Movie }