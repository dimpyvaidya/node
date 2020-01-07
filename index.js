// function findCube(x){
//     x**3;
// }

// //arrow function
// const calCube =(y)=>{
//     y**3;
// }

// //if only one parameter , we can remove parenthesis as well as the braces
// let cube=y=>y**3;
// console.log(`Cube of ${5} is ${cube(5)}`);


// const perimeter=(l,w)=>{
//     // let l;
//     // let w;
//     val=(2*(l+w));
    
//     return val;
// }
// console.log(`perimeter of rectangle is ${perimeter(5,3)}`);

//leap year
const leapYear=(x,y)=>{
 for(let i=x;i<=y;i++){
     if(i%4==0)
     {
        console.log(`${i}`);     }
 } 
}
leapYear(2000,2010);