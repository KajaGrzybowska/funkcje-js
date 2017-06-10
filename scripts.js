// scripts.js

 function getTriangleArea (a, h){

 	if (a, h <= 0) {
 		alert('nieprawidłowe dane');
 		return;
 	}

	return a * h / 2;
}

 console.log(getTriangleArea(10,6));

 var triangle1Area = getTriangleArea (2, 2);
 var triangle2Area = getTriangleArea (4, 4);
 var triangle3Area = getTriangleArea (6, 6);

 alert(triangle1Area);
 alert(triangle2Area);
 alert(triangle3Area);



 
 
 