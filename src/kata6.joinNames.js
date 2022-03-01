const joinNames = namesObj => {  
    return namesObj.reduce((acc, person, index) => {
        if (index < namesObj.length -2) {
            return acc + person.name + ", "
        } else if (index < namesObj.length -1) {
            return acc + person.name + " "
        } else {
            return acc + '& ' + person.name + "."
        }
    }, '')
};

module.exports = joinNames;
