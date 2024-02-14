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
