const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let number = btns[i].getAttribute("data-num");
        screen.value += number;
    });
}

equalBtn.addEventListener("click", function () {
    if (screen.value === "") {
        alert("Input is empty ☹️");
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }
});

deleteBtn.addEventListener("click",function(){
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
})


clearBtn.addEventListener("click", function () {
    screen.value = "";
});
