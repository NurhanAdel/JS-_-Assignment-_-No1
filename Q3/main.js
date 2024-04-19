var num1 = window.prompt("ENTER THE FRIST NUMBER .");
var num2 = window.prompt("ENTER THE SECOND NUMBER .");

if (Number(num1) < Number(num2)) {
    console.log(num2);
}

else if (Number(num1) > Number(num2)) {
    console.log(num1);
}

else {
    console.log("EQUAL");
}