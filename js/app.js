document.getElementById("calculate").onclick = calculateDegree;

function calculateDegree(){
    var forms = document.querySelectorAll('.to-calculate');
    var modules = 0;
    var bachelordegree = 0;
    forms.forEach(
        (input) => {
            if(input.id == "T3_3300"){
                bachelordegree = input.value;
            } else {
                var field = document.getElementById(input.id);
                let ects = field.getAttribute("data-ects");
                let moduleDegree = input.value*ects;
                modules = modules + moduleDegree;
            }
        });
        let modulesDegree = (0.8/170)*modules;
        console.log(modulesDegree);
        let bachelor = (0.2*bachelordegree) + modulesDegree;
        console.log(bachelor);
        var m = document.getElementById('Module');
        m.value = (modules/170);
        var degree = document.getElementById('Degree');
        degree.value = bachelor;
}