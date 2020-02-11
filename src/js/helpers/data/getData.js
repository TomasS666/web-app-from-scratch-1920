import {isArgumentGiven} from "../isArgumentGiven"

function getData(route, params){
    const apiKey = "8ff1964e3739e2af5c150b85ecad19de";
    let parameters = '';
    if(params){
         parameters = `&${params}`;
    }
    
    

    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${apiKey}${parameters}`)
}

export { getData }