module.exports = {
  estaLogueado : function(req,res,next){
    if(req.isAuthenticated()){
      next();
    }else{
      res.redirect('/auth/login');
    }

  },
  adicionarHeaders : function (req, res , next) {

    console.log('Poniendo headers ');
    // Website you wish to allow to connect
     res.setHeader('access-control-allow-origin', '*');

    // // Request methods you wish to allow
    // res.setHeader('access-control-allow-methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('access-control-allow-headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('access-control-allow-credentials', true);

    // Pass to next layer of middleware
    next();
  }

}

