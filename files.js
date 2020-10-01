var fs = require('fs');

exports.upload = (req, res) => {
    console.log(req.file);
    try {
        fs.readFile(req.file.path, (error, data) => {
            if (error) {
                res.status(500).json({ "error": error });
            } else {
                res.send(data);
            }
        })
    } catch (e) {
        console.log("exception", e);
        res.json({ "exception": e })
    }
}
