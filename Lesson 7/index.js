function consoleSimpleNumbers(n) {
    const result = [];
    for( let i = 1; i <= n; i++){
        if( n % i === 0 ){
            result.push(i);
        }
    }
    return result; 
}

console.log(consoleSimpleNumbers(120));
