//Primer Ejercicio 
function calcularFahrenheit(GradosCelcius){
    var formulaFahrenheit=(9 * GradosCelcius / 5 ) + 32;
    return formulaFahrenheit;
};
var GradosCel1=parseFloat(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML=calcularFahrenheit(GradosCel1);


var GradosCel2=parseFloat(document.getElementById("celsius_2").innerHTML)
document.getElementById("fahr_2").innerHTML=calcularFahrenheit(GradosCel2);

var GradosCel3=parseFloat(document.getElementById("celsius_3").innerHTML)
document.getElementById("fahr_3").innerHTML = calcularFahrenheit(GradosCel3);


//Segundo Ejercicio 
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
document.getElementById("best_students").innerHTML=(classification.slice(-3));

//Tercer Ejercicio
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    totalEstrellas(){
        var total= this["5_stars_reviews"] +this["4_stars_reviews"] +this["3_stars_reviews"] + this["2_stars_reviews"] + this["1_stars_reviews"];
        return total;
    }

}

var cantEstrellas = course['5_stars_reviews']*100/course.totalEstrellas();

document.getElementById("course_title").innerHTML = (course.title);
document.getElementById("main_category").innerHTML = (course.categories[0]);
document.getElementById("reviews_5_stars").innerHTML = cantEstrellas.toFixed(0)+"%";


//Cuarto Ejercicio
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

var last = shoppingList.pop();
shoppingList.unshift(last);
shoppingList.push("Cheese","Eggs");
console.log(shoppingList);
