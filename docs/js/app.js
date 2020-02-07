function getData(route, params){
    const apiKey = "8ff1964e3739e2af5c150b85ecad19de";
    
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${apiKey}&${params}`)
}

function createAndAppend (node, targetNode, template,  position){
   
    try{
        // isArgumentGiven([template, node, targetNode])
        console.log(isArgumentGiven([node]))
        if(isArgumentGiven([node])){

            const element = document.createElement(node);
            if(targetNode){
                targetNode.appendChild(element)
            }
            if(template){
                element.textContent = template;
            }
            
            return element;
           
        }else{
            // console.log(isArgumentGiven([template, node, targetNode]))
        }
    }
    catch(err){
        console.log(err)
    }
}

function isArgumentGiven(args){
    if(Array.isArray(args) && args.length){
        // If the given arguments are given in an array
        // Check for every argument if it's not undefined
    
        const checkIfUndefined = args.every(argument => {
            return argument !== undefined
        })

        if(checkIfUndefined){
            return true;
        }else{
            throw Error("One or more given values are undefined")
        }
        
    }else{
        throw Error("Given value isn't an array or is an empty array")
    }
    
}


function genre(params){
    getData("discover/movie", params)
        .then(data => data.json())
        .then(jsonData => {
            console.log(jsonData)
            
            const section = createAndAppend("section", document.querySelector("main"));
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

function init(){

    const genreIds = [27, 28];

    getData("/genre/movie/list")
    .then(data => data.json())

    
    genreIds.forEach(genreId => {
        genre(`with_genres=${genreId}`)
    })
    
    
}

init()