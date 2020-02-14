function set(key, value){
    
    const stringify = new Promise((resolve, reject)=>{
        
        if(value && !get(value)){
            resolve(JSON.stringify(value))
        }else{
            reject("Some shit is wrong")
        }
       
    })

    stringify.then(string => {
        localStorage.setItem(key, string)
    })
    .catch(err => console.log(err))
    

    
}

function get(){

}

function update(){

}

const Store = {
    set:set,
    get:get,
    update:update
}

export {
    Store
}