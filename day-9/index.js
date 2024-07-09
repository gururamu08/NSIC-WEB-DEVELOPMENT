//problem 1:
var n=10;
for(i=1;i<=n;i++){
    console.log(i);
}
//problem 2:
var a=25;
for(i=1;i<=a;i++){
    if (i%2==0) {
        console.log(i);
        
    }
    else{
        continue;
    }
}
//problem 3:
var a=5;
for(i=1;i<=20;i++){
    m=i*a;
    console.log("5"+"x"+i+"="+m);
}
//problem 4:
var s = "gurumoorthi";
let strRev = "";
for (let i = s.length - 1; i >= 0; i--) {
    strRev += s[i];
    }
    console.log(strRev);
//problem 5:
var arr=[1,2,3,4,5];
var sum=0;
for(let i=0;i<=arr.length;i++){
    sum=sum+arr[i];
    console.log(sum);
}

   