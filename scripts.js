// scripts.js

/* PROBLEM: Nie wiem, jak poprawić ten błąd. Najpierw założyłam, że powinnam użyć operatorów logicznych, ale wtedy w ogóle wariuje.
Wyskakuje mi z pieć alertów (3x nieprawidłowe dane, a dwa undefined, mimo że zdefiniowałam trzy, a w konsoli jest undefined, mimo że 
przy tych zmiennych jest bardzo konkretnie (i przy ostatnim alercie powinno działać też) bo nie obejmuje ich warunek; jak usiłuje rozbić z
zmienne a i h na osobne nawiasy i połaczyć operatorem to mi wyskakuje błąd syntax e konsoli.

*/

 function getTriangleArea(a, h) {

 	if (a <= 0 || h <= 0) {

 		return 'nieprawidłowe dane';
 	}

	return a * h / 2;
}

 console.log(getTriangleArea(2, 10)); 

 

 var triangle1Area = getTriangleArea(-2, 2); 
 var triangle2Area = getTriangleArea(4, -4); 
 var triangle3Area = getTriangleArea(6, 6); 

 alert(triangle1Area);
 alert(triangle2Area);
 alert(triangle3Area);

 



 
 
 