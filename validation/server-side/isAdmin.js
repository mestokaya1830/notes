const admin = (req, res, next) => {
  if(req.session.admin){
    next()
  }else{
    req.json('errors', 'Please login!')
    res.redirect('/login')
  }
}

export default admin