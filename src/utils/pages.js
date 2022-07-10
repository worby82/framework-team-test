export const getPageCount = ( totalCount, limit) => {
    return Math.ceil( totalCount/limit );
}

export const getPagesArray = ( totalPages ) => {
    let result = [];
    
    result.push('<<','<');
    for ( let i = 0 ; i < totalPages ; i++ ) {
        result.push( i + 1 );
    }
    result.push('>','>>');

    return result;
}