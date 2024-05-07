import express from 'express';
import jwt from 'jsonwebtoken'
import upload from '../config/multer.js'
import { Adminlogin, Allemploye, addemploye, singleview, profile,update,updateprofile, employelogin, employedelete } from "../controllers/admincontroller.js";
const router = express.Router();
//.........................................
const authenticateToken = (req, res, next) => {
  console.log('authenticateToken')
  const authHeader = req.headers['authorization'];
  console.log(req.headers)
  console.log("authHeader"+authHeader)
  const token = authHeader && authHeader.split(' ')[1];
console.log("token"+token)
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'employesecret', (err, user) => {
    console.log(user)
    if (err) return res.sendStatus(403);
    req.user = user;
    
    next();
  });
};



router.post('/adminlogin', Adminlogin);
router.get('/allemploye', Allemploye);
router.post('/addemploye', addemploye);
router.delete('/employe/:id', employedelete);
router.get('/singleemploye/:id', singleview); 
router.put('/employe/:id', update);
router.post('/employelogin', employelogin);

router.get('/profile',authenticateToken, profile);
router.put('/updateprofile',authenticateToken,updateprofile);

export default router;
