const { Router } = require('express')
const router = Router();

const Article = require('../models/article')

// Adding multer to upload the file 
const multer = require('multer')
const path = require('path')
//  *** //




//  uploading the file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public`));
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });
//****//


router.post("/addnews", upload.single("coverImage"), (req, res) => {
    if (req.fileValidationError) {
        return res.status(400).json({ error: req.fileValidationError });
    }
    if (!req.file) {
        return res.status(402).json({ error: 'No file received' });
    }

    console.log(req.body);
    console.log(req.file)
    return res.json({ message: 'done news' });
})

module.exports = router;