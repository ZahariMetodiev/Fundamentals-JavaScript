function theatrePromotions(dayType, age) {
  
  
    /*
       Day / Age	0 <= age <= 18	  18 < age <= 64	64 < age <= 122
          Weekday	     12$	           18$	             12$
          Weekend	     15$	           20$	             15$
          Holiday	     5$	               12$	             10$
*/

    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    let price = 0;

    switch (dayType) {
    case "Weekday":
        if (age >= 0 && age <= 18) {
            price = 12;
        }else if(age <= 64){
            price = 18;
        }else{
            price = 12;
        }
      break;
    case "Weekend":
        if (age >= 0 && age <= 18) {
            price = 15;
        }else if(age <= 64){
            price = 20;
        }else{
            price = 15;
        }
      break;
    case "Holiday":
        if (age >= 0 && age <= 18) {
            price = 5;
        }else if(age <= 64){
            price = 12;
        }else{
            price = 10;
        }
      break;
    default:
        console.log("Error!");
      break;
  }

  console.log(price + "$");
}

monthPrinter('Weekday', 42);
monthPrinter('Holiday', -12);
monthPrinter('Holiday', 15);
