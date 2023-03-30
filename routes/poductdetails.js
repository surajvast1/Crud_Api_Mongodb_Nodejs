const express = require("express");
const router = express.Router();
const Update = require("../database/typeofdata")
const Database2 = require("../database2");


router.get('/' , async (req, res) => {
    try {
        const user = await Update.find();
        
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
    await Database2;
});

router.post('/',async(req,res)=>
{
    const member = new Update({
        name:req.body.name,
        price:req.body.price,
        featured:req.body.featured,
        company:req.body.company,
    })
    try{
        const addeddata = await member.save()
        res.status(200).json(addeddata);
        console.log("Created sucessufully")
    }
    catch(err){
        console.log(err);
    }
    await Database2;
})


router.get('/:id' , async (req, res) => {
    try {
        const user = await Update.findById(req.params.id);

        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
    await Database2;
});


router.patch('/:id', async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    await Update.findByIdAndUpdate(id, req.body, {useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
    await Database2;
});


router.delete('/:id',async (req, res) => {
    await Update.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
            
          })
          ;
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
    await Database2;
});

module.exports = router;

