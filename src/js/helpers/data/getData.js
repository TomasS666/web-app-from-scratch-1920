import {isArgumentGiven} from "../isArgumentGiven"

function getData(endpoint, params){
    
    const apiKey = "8ff1964e3739e2af5c150b85ecad19de";
    let parameters = '';
    if(params){
         parameters = `&${params}`;
    }
    console.log(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}${parameters}`)
    return fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}${parameters}`)
}

export { getData }