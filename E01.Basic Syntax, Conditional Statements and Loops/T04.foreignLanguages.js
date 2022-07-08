function demo(country) {
  /*
•	English is spoken in England and USA;
•	Spanish is spoken in Spain, Argentina, and Mexico;
•	For the others, we should print "unknown";
*/

  switch (country) {
    case "USA":
    case "England":
      console.log("English");
      break;
    case "Mexico":
    case "Argentina":
    case "Spain":
        console.log("Spanish");
      break;
    default:
        console.log("unknown");
      break;
  }
}

demo("England");
demo("Mexico");
demo("Argentina");
demo("Spain");
demo("USA");