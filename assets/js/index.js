let isVisible = false;
const defaultClass = "badge rounded-pill";
const operation = [2, 3, 5, 9, 10]

function calculate() {
    if(!isVisible) {
        results = $(".results").css({
            "display": "block",
            "visibility": "visible"
        });
        isVisible = true;
    }
 
    let value = $("#number").val();
 
    $(".rounded-pill").each(function(i) {
        let $this = $(this)
        $this.removeClass().addClass(defaultClass);

        if(value % operation[i] == 0) {
            $this.html("ділиться").addClass("bg-success");
        } else {
            $this.html("не ділиться").addClass("bg-danger");
        } 
    });

    // let mainDiv = document.getElementById("results");
    // mainDiv.style.display = "block";
    // mainDiv.style.visibility = "visible";

    // let trueCondition = "ділиться";
    // let falseCondition = "не ділиться";
    // let text = document.getElementById("number").value;
    // let number  = parseInt(text);
    
    // let by2 = document.getElementById("by2");
    // let by3 = document.getElementById("by3");
    // let by5 = document.getElementById("by5");
    // let by9 = document.getElementById("by9");
    // let by10 = document.getElementById("by10");
   
    // by2.innerText = number % 2 == 0 ? trueCondition: falseCondition; 
    // by3.innerText = number % 3 == 0 ? trueCondition: falseCondition; 
    // by5.innerText = number % 5 == 0 ? trueCondition: falseCondition; 
    // by9.innerText = number % 9 == 0 ? trueCondition: falseCondition; 
    // by10.innerText = number % 10 == 0 ? trueCondition: falseCondition; 
}