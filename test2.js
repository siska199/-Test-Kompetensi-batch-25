function search(min,max){
    array = [32,97,71,85,10,20,67,2,41,52]
    const result = array.filter(rangeNumber)
    function rangeNumber(i){
        return(i>=min && i<=max)
    }
    console.log(`Data range ${min} sampai ${max} = ${result}`)
}

search(20,45)

