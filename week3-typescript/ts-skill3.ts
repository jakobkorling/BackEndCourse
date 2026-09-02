// Creates enum "Color" with three values
enum Color {
    Red,
    Green,
    Blue,
}

// Creates function "showColor" with if-statements
const showColor = (color: Color) => {
    if (color === Color.Red) {
        console.log("You chose Red");
    } else if (color === Color.Green) {
        console.log("You chose Green") 
    } else if (color === Color.Blue) {
        console.log("You chose Blue")
    }
};

// Calls the function with three different enum-values
showColor(Color.Red);
showColor(Color.Green);
showColor(Color.Blue);