let html = 'teste'; 
let c = 0;

/*
while(c <= 10) {
    html += "Número: " + c + "<br/>";
    c++;
}
*/

for (i = 0; i<=10; i++) {
    html = html + i + "<br/>"
}

document.getElementById("demo").innerHTML = html;


