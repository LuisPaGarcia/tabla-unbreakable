function swipper(array){
    var ret = {};

    array.forEach(element => {
        ret[element] = ''
    });
    return ret
}

export { swipper}