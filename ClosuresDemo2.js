//#1
function x(){
    var a= function y(){
        console.log(a);
    };
    
    y();
}
x();


//#2
function x(){
    var a= 7;
    
    y();
}
x(function y(){
    console.log(a);  
});


//#3
function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    return y;
}
x();


//#4
function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z= x(); 

//#5
function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z= x();
console.log(z);
/*....
.....
.....*/
z(); 