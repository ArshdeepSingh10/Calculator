
var d ="";
function as(val){
     
d  += (val)  ;

document.getElementById("input").innerHTML =d;
  
    
}

function clr(){
    document.getElementById("input").innerHTML = "";
d ="";
}
function aws(){
    var s = eval(d);
    document.getElementById("input").innerHTML =s;
    d=s;
    

}