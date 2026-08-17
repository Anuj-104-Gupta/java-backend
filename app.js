//console.log(process.argv)
const k = process.argv
if (k[2]) {
    switch (k[2]) {
        case 'development':
            console.log("Debug Login Confirmed")
            break;
        case 'staging':
            console.log("Testing Configuration")
            break;
        case 'production':
            console.log("Production configuration")
            break;
        default:
            console.log("Unknown mode")
    }
}
else { 
    console.log("No mode supplied")
}