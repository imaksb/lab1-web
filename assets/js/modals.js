let showSth = {
  display: "block",
  visibility: "visible",
};

let hideSth = {
  display: "none",
  visibility: "hidden",
};

function showModal() {
  $(".some-modals").css(showSth);
  $(".nav-links li").css(hideSth);
}

function hideModal() {
  results = $(".some-modals").css(hideSth);
  $(".nav-links li").css(showSth).css({ display: "inline" });
}
