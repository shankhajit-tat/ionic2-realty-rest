function createContactRest(req,res,next){
  console.log('Request Body'+req.body);
  res.status(201).end();
}
exports.createContactRest = createContactRest;
