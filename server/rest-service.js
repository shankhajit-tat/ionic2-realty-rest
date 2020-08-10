function createContactRest(req,res,next){
  console.log('createContactRest Request Body=>'+JSON.stringify(req.body));
  res.status(201).end();
}
function updateContactOutboundMessage(req,res,next){
    console.log('updateContactOutboundMessage Request Body=>'+JSON.stringify(req.body));
    /*var notification = req.body["soapenv:envelope"]["soapenv:body"][0]["notifications"][0];
    var sessionId = notification["sessionid"][0];
    var data = {};
    if (notification["notification"] !== undefined) {
      var sobject = notification["notification"][0]["sobject"][0];
      Object.keys(sobject).forEach(function(key) {
        if (key.indexOf("sf:") == 0) {
          var newKey = key.substr(3);
          data[newKey] = sobject[key][0];
        }
      }); // do something #awesome with the data and sessionId
      console.log('data=>'+JSON.stringify(data));
    }*/
    res.status(201).end();
}
exports.createContactRest = createContactRest;
exports.updateContactOutboundMessage = updateContactOutboundMessage;
