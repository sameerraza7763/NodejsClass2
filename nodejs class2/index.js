import fetch from "node-fetch";
import mongoose from "mongoose";
const mongoUri="mongodb+srv://Project:Project@cluster1.ijgulgt.mongodb.net/Project?retryWrites=true&w=majority"
mongoose.connect(mongoUri)


 const postSchema= new mongoose.Schema({
   postData:{
    type:Array,
    required:true
   }
})
const Post=mongoose.model('Post',postSchema)

async function getPosts(){
    const myPosts=await fetch("https://jsonplaceholder.typicode.com/posts")
    const response= await myPosts.json()
    
    
       
       const post=new Post({
        postData:response
       })
       console.log(Post)
      await post.save()
    
}
  import http from "http"
const server=http.createServer((req,res)=>{


        async function getData (req,res){

        const data=await Post.find({response:'Post'})
        // res.send({data:data})
        // res.send({data:data})
        
        console.log(data)
return data
    }

    // async function deleteData(e){
    //     Project.posts.deleteMany( { response: "Post" } )
    // }
    // deleteData()
    getData()
    if  (req.url==="/"){return res.end('<h1>Home page</h1>')}
    if  (req.url==="/about"){return res.end('<h1> About Page </h1>')}
    if  (req.url==="/service"){return res.end('<h1> Service  page </h1>')}
    if  (req.url==="/contact"){ return res.end('<h1> Contact Page </h1>')}
   else{"<h1>404 Error Not Found</h1>"}

})
server.listen(3000,"localhost",()=>{
    console.log("server is running on http://localhost:3000")
}) 





getPosts()