const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

$(".rounded-pill").on("shown.bs.popover", function () {
  setTimeout(function () {
    $(".rounded-pill").popover("hide");
  }, 600);
});
