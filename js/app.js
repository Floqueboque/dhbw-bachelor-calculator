document.getElementById("calculate").onclick = calculateDegree;

function calculateDegree(){
    var forms = document.querySelectorAll('.to-calculate');
    forms.forEach(
        (input) => {
            console.log(input.value);
        });
}