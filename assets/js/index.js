const defaultClass = "badge rounded-pill";
const operation = [2, 3, 5, 9, 10];
let popUp = false;

function calculate() {
  let value = parseInt($("#number").val());
  console.log(popUp);

  if (isNaN(value)) {
    popUp = appendAlert("Ви ввели не число. Спробуйте ще раз...", "danger");
    return;
  }

  if (popUp) {
    $(".alert").each(function () {
      let $this = $(this);
      const alertInstance = bootstrap.Alert.getOrCreateInstance($this);
      alertInstance.close();
    });
    popUp = false;
  }

  $(".rounded-pill").each(function (i) {
    let $this = $(this);
    $this.removeClass().addClass(defaultClass);

    if (value % operation[i] == 0) {
      $this.html("ділиться").addClass("bg-success");
    } else {
      $this.html("не ділиться").addClass("bg-danger");
    }
  });

  showResults();
}
