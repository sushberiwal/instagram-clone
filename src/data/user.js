// CREATE TABLE
// IF NOT EXISTS user (
//     id VARCHAR
// (36) PRIMARY KEY,
//     name VARCHAR
// (50) NOT NULL,
//     email VARCHAR
// (50),
//     phone_number INT,
//     is_verified BOOLEAN DEFAULT false,
//     bio VARCHAR
// (100),
//     handle VARCHAR
// (15) NOT NULL UNIQUE,
//     image_url VARCHAR
// (50)
// );
const user = [
    {
        id:1,
        name:"Sushant Beriwal",
        email:"sushantberiwal@gmail.com",
        phone:8285323335,
        is_verified:true,
        bio:"new to insta",
        image_url:"https://www.pepcoding.com/data/team/photo/sushant_beriwal.jpg"

    }
]

export default user;