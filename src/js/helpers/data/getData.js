import {isArgumentGiven} from "../isArgumentGiven"

function getData(endpoint, params){
    
    const apiKey = "";
    let parameters = '';
    if(params){
         parameters = `&${params}`;
    }
    return fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}${parameters}`)
}

export { getData }
