function receivesAFunction(callback){
    callback();
};

function returnsANamedFunction(){
    const namedFunction = function(){
        console.log('')
    }
    return namedFunction;
};


function returnsAnAnonymousFunction() {
    return () => console.log("We did it!");
};