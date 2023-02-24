import express from "express";
import {
  createOrUpdate,
  readAllUsers,
  getUserById,
  deleteUserById,
} from "./db.js";

const router = express.Router();


// read all users 
router.get("/users" , async(req,res) => {
    const {success,data} = await readAllUsers();

    if(success) {
        return res.json({success,data});
    }
    return res.status(500).json({success:false, message :"ERROR"});
})

// get user by id 
router.get("/user/:id", async(req,res) =>{
    const {id} = req.params;
    const {success, data} = await getUserById(id);
    console.log(data);
    if(success) {
        return res.json({success, data});
    }
    return res.status(500).json({success:false, message:"Error"});
})

// create a user
router.post('/user' , async(req,res) => {
    const {success, data} =  await createOrUpdate(req.body) 

    if(success) {
        res.json({success, data})
    }

    return res.status(500).json({success:false, message:"Error"})
})

// to update a user 

router.put("/user/:id" , async(req,res) => {
    const user = req.body
    const {id} = req.params
    user.id = parseInt(id)
    const {success, data} =  await createOrUpdate(user) 

    if(success) {
        res.json({success, data})
    }

    return res.status(500).json({success:false, message:"Error"})
}) 
// to delete a user 
router.delete("/user/:id", async(req,res) => {
    const {id} = req.params
    const {success, data} = await deleteUserById(id);
    if(success) {
        res.json({success, data})
    }

    return res.status(500).json({success:false, message:"Error"})
})

export default router;