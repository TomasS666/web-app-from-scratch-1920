function cleanObjects(array, fields){
    return array.map(obj => {

        // www.github.com/kriskuiper
        return fields.reduce((tuples, field) => {
            tuples[field] = obj[field]

            return tuples
        }, {})
    })
}


const movies = [{
    id: 12,
    name: "Tomas",
    age: 23
}]

console.log(cleanObjects(movies, ['name', 'age']))



export {cleanObjects}