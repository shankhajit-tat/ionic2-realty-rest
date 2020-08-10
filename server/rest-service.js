function createContactRest(req,res,next){
  console.log('Request Body=>'+JSON.stringify(req.body));
  res.status(201).end();
}
exports.createContactRest = createContactRest;
