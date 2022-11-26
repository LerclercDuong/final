const users = require('../models/users');
const status = require('../models/status');
const multer = require('multer');

           const upload = multer({
           limits: {
          fileSize: 4 * 1024 * 1024,
          }
});

class home {
       homePage(req, res, next){
           const allSTT = status.find({}).sort({createdAt: -1})
                .then(function(data) {
                    return data;
                })
           const topUser = users.find({}).limit(5).sort({credits: -1}).then(function(user){
            return user;
           })

           async function renderPage(){
                const allStatus = await allSTT;
                const topUsers = await topUser;
        
                res.render('home', {layout: 'layouts/main', status : allStatus, topUsers})
           }
               renderPage()
           
       }
      postStatus(req, res, next){
        
           const st = new status({
            username: 'hoang',
            content: req.body.content
           })
           st.save()
           res.redirect('/') 
           


      }
     // postImage(req, res, next){
     //      var storage =multer.diskStorage({ 
     //           destination: function(req,file,cb){
     //                cb(null,'./upload')
     //           },
     //           filename: function (req, file, cb) {
     //                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
     //                cb(null, file.fieldname + '-' + uniqueSuffix)
     //              }
     //      })
     //      const upload = multer({ storage: storage })
     // }

     }
module.exports = new home;