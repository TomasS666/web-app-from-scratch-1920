// const obj = {

// }


function getData(route, params){
const apiKey = "8ff1964e3739e2af5c150b85ecad19de";
    
    return fetch(`https://api.themoviedb.org/3/${route}?api_key=${apiKey}&${params}`)
        // .then(data => data.json())
        // .then(data => {
        //         console.log(data)
        //         init(data);
        //    return;
        // })
        // .catch(err => console.log(err))
}

// function toJSON(data){
//     data.j
// }


const genre = getData("discover/movie", "with_genres=27")
.then(data => data.json())
.then(jsonData => {
    console.log(jsonData)
    jsonData.results.forEach(obj => {
    const article = createAndAppend(
            "article", 
            document.querySelector("main")
        )
        createAndAppend(          
            "h1",
            document.querySelector("article"),
            obj.title
        )
    })
})



function createAndAppend (node, targetNode, template,  position){
   
    try{
        // isArgumentGiven([template, node, targetNode])
        console.log(isArgumentGiven([node, targetNode]))
        if(isArgumentGiven([node, targetNode])){

            const element = document.createElement(node);
            if(template){
                element.textContent = template;
            }

            targetNode.append(element)

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

    args.forEach(argument => {
        return argument !== undefined ? true : false;
    })
    
}


function init(data){
    let node = document.querySelector("#content")
    console.log(data.results)

    data.results.forEach(obj => {
        // console.log(node)
        createAndAppend(obj.title, "h1", node)
    })

   
}

