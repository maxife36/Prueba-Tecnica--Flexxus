function filterArrays(filter:string[], filtered :string[]){
    console.log(filtered.filter(i => filter.includes(i)).join(', '));  
}

export default filterArrays