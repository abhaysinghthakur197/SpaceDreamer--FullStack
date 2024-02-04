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
        cb(null, path.resolve(`./public/articleCoverImage`));
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });
//****//


router.post("/addnews", upload.single("coverImage"), async (req, res) => {    
    console.log(req.body)
    console.log(req.file)
    if (req.fileValidationError) {
        return res.status(400).json({ error: req.fileValidationError });
    }
    if (!req.file) {
        return res.status(402).json({ error: 'No file received' });
    }
    
    const {title, body} = req.body;
    const article = await Article.create({
        title,
        body,
        // createdBy: req.user._id,
        coverImageURL: `./public/articleCoverImage/${req.file.filename}`,
    })

    return res.json({ message: 'uploaded news' });
})

module.exports = router;