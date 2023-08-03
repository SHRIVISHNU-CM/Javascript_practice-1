let package = "standard";
switch(package){
    case "express":
        console.log("your package will be delivered in next 1-2 days");
        break;
    case "standard":
        console.log("your package will be delivered in next 3-5 days");
        break;
    case "overnight":
        console.log("your package will be delivered by tomorrow");
        break;
        default:
            console.log("invalid!");
    
}