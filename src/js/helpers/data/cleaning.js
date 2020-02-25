function cleanObjects(array, fields){
    return array.map(obj => {

        // www.github.com/kriskuiper
        return fields.reduce((tuples, field) => {
            tuples[field] = obj[field]

            return tuples
        }, {})
    })
}

export {cleanObjects}