function getValue(event) {
    const expression = document.getElementById('screen').textContent
    console.log(event)
    const expr = event.target.textContent
    if (expr === "+" && expression.charAt(expression.length-1) !== "+" ) {
        document.getElementById('screen').textContent += expr
    } else if (expr === "-" && expression.charAt(expression.length-1) !== "-") {
        document.getElementById('screen').textContent += expr
    } else if (expr === "*" && expression.charAt(expression.length-1) !== "*") {
        document.getElementById('screen').textContent += expr
    } else if (expr === "/" && expression.charAt(expression.length-1) !== "/") {
        document.getElementById('screen').textContent += expr
    } else if (expr === "%" && expression.charAt(expression.length-1) !== "%") {
        document.getElementById('screen').textContent += expr
    } else if (expr === "^" && expression.charAt(expression.length-1) !== "^") {
        document.getElementById('screen').textContent += expr
    } else if (expr !== "%" && expr !== "/" && expr !== "*" && expr !== "-" && expr !== "+" && expr !== "^" ) {
        document.getElementById('screen').textContent += expr
    }
}

function getResult() {
    const expression = document.getElementById('screen').textContent
    const result = eval(expression)
    document.getElementById('screen').textContent = result
}

function clearScreen() {
    document.getElementById('screen').textContent = ""
}