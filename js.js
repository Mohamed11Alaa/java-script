


let job = "Manager";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        break;

    case "IT":
    case "support":
        salary = 6000;
        break;
         case "Developer":
         case "Designer":

        salary = 7000;
        break;
        default:
        salary = 4000;
        break;
}

console.log(`The salary for the job ${job} is ${salary}`);