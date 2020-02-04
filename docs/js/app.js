// const obj = {

// }

fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ff1964e3739e2af5c150b85ecad19de&page=10")
    .then(data => data.json())
    .then(data => {
        console.log(data)
        init(data)
        // obj.data = data
    })
    .catch(err => console.log(err))


function render (template, node, targetNode, position){
    // targetNode.insertAdjacentHTML(
    //     position ? position : "afterbegin",
    //     template
    // )

    // Check if the required arguments ar
   
    
    try{
        // isArgumentGiven([template, node, targetNode])
        console.log(isArgumentGiven([template, node, targetNode]))
        if(isArgumentGiven([template, node, targetNode])){

            const element = document.createElement(node);
            element.textContent = template;

            targetNode.append(element)

        }else{
            console.log(isArgumentGiven([template, node, targetNode]))
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
        // r

        console.log(args.every(argument => {
            argument !== undefined
        }))

    
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
        render(obj.title, "h1", node)
    })

   
}

