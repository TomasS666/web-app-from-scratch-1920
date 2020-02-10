import { getData } from "../../helpers/data/getData";
import {
    createAndAppend
} from "../../helpers/createAndAppend";

function Movie(id){
    console.log(id + "fwefe")

    getData(`movie/${id}`)
        .then(data => data.json())
        .then(json => console.log(json))
}


export { Movie }