function longest_word() {
  let longestWord = $("#text")
    .val()
    .split(" ")
    .reduce(
      (longest, currentWord) =>
        currentWord.length > longest.length ? currentWord : longest,
      ""
    );
  $(".rounded-pill").html(longestWord);
  $(".length-rounded").html(longestWord.length);
  showResults();
}
