function isArgumentGiven(args){
    if(isArray(args)){
        if(!isArrayEmpty(args)){
            return !isUndefined(args) ? true : false;
        }
    }
}

function isArray(array){
    return Array.isArray(array) ? true : false;
}

function isArrayEmpty(array){
    return array.length ? false : true;
}


function isUndefined(args){
    return args.every(argument => {
        return argument === undefined
    })
}



export { isArgumentGiven }