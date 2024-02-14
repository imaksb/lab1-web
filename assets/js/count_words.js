function countWords() {
  let value = $("#text").val().split(" ");
  let length = value.length;
  if (value[0] == "") {
    length = 0;
  }
  $(".rounded-pill").html(length);
  showResults();
}
