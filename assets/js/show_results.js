let isVisible = false;

function showResults() {
  if (!isVisible) {
    results = $(".results").css({
      display: "block",
      visibility: "visible",
    });
    isVisible = true;
  }
}
