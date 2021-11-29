// LECTURE: Logical Operators
if (language === "english" && population < 50000000 && isIsland) {
  console.log("You should live in Poland!");
} else {
  console.log("Poland does not meet your criteria");
}
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th");
    break;
  default:
    console.log("great language too:)");
}
