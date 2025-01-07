const first=(req,res)=>{
    res.send('Create a new user');
}

const second=(req,res)=>{
  
    res.json({email:req.body.email});
}

module.exports= first;
module.exports= second;