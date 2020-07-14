var url = "http://sgulogginservice.com/log";

function logging(message)
{
    //send an HTTP request
    console.log(message);
}

//module.exports.publicLog = logging;
module.exports = logging;