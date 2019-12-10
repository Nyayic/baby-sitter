/* import axios from axios;


const url = 'http://localhost:4000/controller/registerroute/',

class PostService{

    //get post

    static getPost(){
        return new Promise (async(resolve,reject)=>{
            try{

                const res =await axios.get(url)
                const data =res.data
                resolve(
                    data.map(post =>({...post, createdAt: new Date(post.create)}))
                )
            }
            catch(err){
                reject(err)

            }
        }
    }

    //create post

    static insertPost(text) {
        return axios.post(url,{text})
    }


    //delete post
static deletepost(id){
    return axios.delete(`${url}${id}`)
}
}
module exports = postService */