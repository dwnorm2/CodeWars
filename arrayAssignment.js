// Translate border-left-width to borderLeftWidth

function camelize(str) {
  if (str[0] !== "-") {
    return str
      .split("-")
      .map((word, i) => (i == 0 ? word : word[0].toUpperCase() + word.slice(1)))
      .join("");
  } else {
    return str
      .substring(1)
      .split("-")
      .map((word, i) => (i == 0 ? word : word[0].toUpperCase() + word.slice(1)))
      .join("");
  }
}

camelize("-webkit-transition");
