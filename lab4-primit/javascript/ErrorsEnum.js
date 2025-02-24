const prompt = require("prompt-sync")({sigint:true}); 

const Error_enumobj = {
	FP_ROUNDING: "FP_ROUNDING",
	FP_OVERFLOW: "FP_OVERFLOW",
	FP_UNDERFLOW: "FP_UNDERFLOW",
	INT_OVERFLOW: "INT_OVERFLOW"
}

const Result_enumobj = {
    A_BIT_DIFFERENT: "A_BIT_DIFFERENT", 
    INFINITY: "INFINITY", 
    ZERO: "ZERO", 
    VERY_DIFFERENT: "VERY_DIFFERENT"
}

// Function to map Result_enumobj to Error_enumobj
function result2Error(res) {
    switch (res) {
        case Result_enumobj.A_BIT_DIFFERENT:
            return Error_enumobj.FP_ROUNDING;
        case Result_enumobj.INFINITY:
            return Error_enumobj.FP_OVERFLOW;
        case Result_enumobj.ZERO:
            return Error_enumobj.FP_UNDERFLOW;
        case Result_enumobj.VERY_DIFFERENT:
            return Error_enumobj.INT_OVERFLOW;
        default:
            return 'Invalid Result value';
    }
}

console.log('Result list: ', Object.values(Result_enumobj));
var validArg = false;
while(!validArg){
    var input = prompt("Input: ");
    let result = result2Error(input);
    if (Object.values(Error_enumobj).includes(result)){
        validArg = true;
		console.log(input + " results in " + result2Error(input));
    }
    else{
        console.log(result);
    }
}
