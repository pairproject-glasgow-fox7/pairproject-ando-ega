const isLogin = (req, res, next)=>{
    if(req.session.userId){
        //console.log(req.session.userId)
        next()
    } else{
        res.redirect('/home?error=Tolong login terlebih dahulu')
    }
}

const isAdmin = (req, res, next)=>{
    if(req.session.userId && req.session.userRole === 'admin'){
        next()
    }else{
        res.redirect('/event?error=Tidak punya akses untuk menggunakan halaman ini')
    }
}

module.exports = {isLogin, isAdmin}