a = [2, 4, 7, 8, 7, 7, 1];
e = 7;
var app=0;
function noapp(e){
    for(i=0;i<a.length;i++){
        if (e===a[i]){
            app=app+1;
        }
    }
    return app;
}
var res=noapp(e);
console.log(res);