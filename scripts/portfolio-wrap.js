(function () {
  function updateRow(description) {
    var row = description.closest(".portfolioRow");
    if (!row) return;

    row.classList.remove("portfolioRowCols2", "portfolioRowCols1");

    if (description.scrollHeight > description.clientHeight) {
      row.classList.add("portfolioRowCols2");
    }

    if (description.scrollHeight > description.clientHeight) {
      row.classList.remove("portfolioRowCols2");
      row.classList.add("portfolioRowCols1");
    }
  }

  function updateAll() {
    var descriptions = document.querySelectorAll(".portfolioRowDescription");
    for (var i = 0; i < descriptions.length; i += 1) {
      updateRow(descriptions[i]);
    }
  }

  window.addEventListener("load", updateAll);
  window.addEventListener("resize", updateAll);
})();
