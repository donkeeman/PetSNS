const Post = require("../model/post");

    // yyyy-mm-dd format
const formatDate = (date) => {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();
    if(month.length < 2){
        month = "0" + month;
    }
    if(day.length < 2){
        day = "0" + day;
    }

    return [year, month, day].join("-");
}

const postCtr = {
    upload: async (req, res) => {
        const {title, content} = req.body;
        const image = req.file.location;
        // console.log(image);
        const publishedDate = formatDate(new Date());
        const post = new Post({
            title: title,
            content: content,
            image: image,
            publishedDate: publishedDate,
        });

        try{
            await post.save();
            res.redirect("/");
        }catch(error){
            res.status(500).send("upload error");
        }
    },
    list: async (req, res) => {
        const posts = await Post.find({});
        res.render("index", {postList: posts});
    },
    detail: async (req, res) => {
        const {id} = req.params;
        const post = await Post.findById(id);
        res.render("detail", {post: post});
    },
    updateLayout: async (req, res) => {
        const {id} = req.params;
        const post = await Post.findById(id);
        res.render("update", {post: post});
    },
    update: async (req, res) => {
        const {id} = req.params;
        const {title, content} = req.body;
        try{
            await Post.findByIdAndUpdate(
                id,
                {
                    title: title,
                    content: content
                },
                {
                    new: true,
                },
            );
            res.redirect("/");
        }catch(error){
            res.status(500).send("update eroor");
        }
    },
    delete: async(req, res) => {
        const {id} = req.params;
        try{
            await Post.findOneAndDelete(id);
            res.redirect("/");
        }catch(error){
            res.status(500).send("delete error");
        }
    },
};

module.exports = postCtr;