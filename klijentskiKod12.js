var userRangeValue;
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "SUBMIT";
    } else if (n == 0) {
        document.getElementById("nextBtn").innerHTML = "START";
    }
    else {
        document.getElementById("nextBtn").innerHTML = "NEXT";
    }

    questionCounter(n, x.length - 1);
}

function nextPrev() {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";

    if (currentTab == x.length - 1) {
        var smiles = document.getElementsByClassName("smile");
        for (let i = 0; i < smiles.length; i++) {
            const element = smiles[i];
            if (element.id == userRangeValue) {
                element.style.display = "block";
                document.getElementById("nextBtn").style.display = "none";
                return
            }

        }
    }

    if (x[currentTab].id == "inputQuiz") {
        if (!isNameFormValid()) {
            showTab(currentTab)
            return
        }
    }
    currentTab = currentTab + 1;
    showTab(currentTab);
}

function isNameFormValid() {
    let nameFormElement = document.forms["myForm"]["Ime"];

    if (nameFormElement.value == "") {
        alert("Name must be filled out")
        return false
    }

    return true
}


function smile(x) {
    if (x == 0) {
        document.getElementById("Text1").style.display = "block";
    }
    else {
        document.getElementById("Text1").style.display = "none";
    }
}

function questionCounter(n1, n2) {

    var poruka = document.getElementById("step");
    poruka.innerHTML = "Question " + n1 + " of " + n2;

    var poruka1 = document.getElementById("step1");
    poruka1.innerHTML = "Question " + n1 + " of " + n2;

    var poruka2 = document.getElementById("step2");
    poruka2.innerHTML = "Question " + n1 + " of " + n2;


    var poruka3 = document.getElementById("step3");
    poruka3.innerHTML = "Question " + n1 + " of " + n2;


    var poruka4 = document.getElementById("step4");
    poruka4.innerHTML = "Question " + n1 + " of " + n2;
}

function showInput(inputValue1) {
    var name1 = document.getElementById("name1");
    name1.innerHTML = inputValue1;
    var name2 = document.getElementById("name2");
    name2.innerHTML = inputValue1;
    var name3 = document.getElementById("name3");
    name3.innerHTML = inputValue1;
    var name4 = document.getElementById("name4");
    name4.innerHTML = inputValue1;
    var name5 = document.getElementById("name5");
    name5.innerHTML = inputValue1;
}

function updateSlider(slideAmout) {
    userRangeValue = slideAmout;

}