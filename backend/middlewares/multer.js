import multer from 'multer';

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)       // Save with the original filename
    }
})

const upload = multer({ storage })

export default upload