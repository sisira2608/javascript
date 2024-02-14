let rows=4;
let char=" ";
let count=0;
for(i=1; i<rows; i++){
    for(j=i; j<=rows-i; j++){
        count += i;
        char= "i ";
    }
 for(k=1 ; k<=2*rows-i; k++)
 {
    char = " ";
 }   
char ="\n";

}
console.log(char);




let arr=[1,2,-2,0,-1]
let sum=0;
for(let i=0; i<arr.length; i++)
{
    if(arr[i]=== 0)
    {
        sum +=arr;
        let result= arr[i];
    }

 console.log("sum:" +arr[i]);   
}