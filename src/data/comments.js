// CREATE TABLE
// IF NOT EXISTS comment
// (id
//     id VARCHAR
// (36) PRIMARY KEY,
//     date DATE,
//     user_id VARCHAR
// (36) NOT NULL,
//     post_id VARCHAR
// (36) NOT NULL,
//     data VARCHAR
// (256),
//     INDEX
// (post_id)
// );


const comments = [
    {
        id:"1",
        user_id:"1",
        post_id:"1",
        data:"this is an amazing post",
    } , 
    {
        id:"2",
        user_id:"1",
        post_id:"1",
        data:"i love this post",
    },
    {
        id:"3",
        user_id:"1",
        post_id:"1",
        data:"comments are working",
    },
    {
        id:"4",
        user_id:"1",
        post_id:"2",
        data:"This comment is for post 2",
    },

];






export default comments;