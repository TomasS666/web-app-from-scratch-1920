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



export { isArgumentGiven }