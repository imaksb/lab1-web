const alertPlaceholder = $("#liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    ` <div class="alert alert-${type}" role="alert">`,
    `${message}`,
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
  return true;
};
