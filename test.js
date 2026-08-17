/*function createConfig(port, host, debug) {
    port = Number(port ?? 8080)
    host = host ?? "localhost"
    debug = debug ?? false
    console.log(port,host,debug)
}
createConfig()
createConfig(3000)
createConfig(0,"",false)
createConfig(null,null,null)
createConfig("5000", "127.0.0.1",true)*/
analyzeNumber = function (value) {
    let message = ""
    if (Number.isNaN(value)) {
        console.log('Do not Enter Nan')
    } else {
        if (typeof (value) === "number") {
            if (Number.isInteger(value)) {
                message = "Integer & "
                message += (value % 2 === 0) ? "Number is Even & is" : "Number is Odd & is"
                message += (value > 0) ? " Positive" : (value < 0) ? " Negative" : " Zero or Neutral"
                console.log(message)
            } else {
                console.log("Given Value is Float")
            }
        }
        else {
            console.log("Enter valid input")
        }
    }
}
analyzeNumber("28")
analyzeNumber(null)
analyzeNumber(undefined)
analyzeNumber(-7)
analyzeNumber(3.14)