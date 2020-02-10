function getData(route, params){
    const apiKey = "8ff1964e3739e2af5c150b85ecad19de";
    
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${apiKey}&${params}`)
}

export { getData }