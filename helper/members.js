function member(value){
    if (value === 1){
        return 'Solo'
    }else if(value > 1){
        return `${value} members`
    }
}

//console.log(member(3))

module.exports = member