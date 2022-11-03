// ● Create 3 new variables that each of them holding a 3X3 matrix
// ● Create new object that has 3 properties. each property will contain each matrix 
// you created
// ● Write a function that get the object you created as a parameter and print all the 
// elements inside the matrix that you saved in it’s second property
// ● Bonus: Implement the same instruction but without using for loops

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let matrix2 = [[10, -11, 12], [13, -14, 15], [16, -17, 18]]
let matrix3 = [[19, 20, 21], [22, 23, 24], [25, 26, 27]]

let obj = {property1: matrix1,
           property2: matrix2,
           property3: matrix3}

function Obj(obj){
     for (let element_matrix of matrix2) {
         for (let e of element_matrix.sort((a,b) => a - b)) {
              console.log(e)
            }
     }
 }
 Obj()

 


 
    

        
        



