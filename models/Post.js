
const db = require('../config/db')

class Post{
    //This must match with the columns of the database
    constructor(title, body){
        this.title = title;
        this.body = body

    }

      save(){
          //async save()
        //this is to create datetime in the database, 
        //store it in the database

        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO posts(
            title, 
            body, 
            created_at
            )
            VALUES
            (
                '${this.title}',
                '${this.body}',
                '${createAtDate}'
            )
        `;

        return db.execute(sql)
        /*const [newPost, _] = db.execute(sql);
        return newPost;*/
    }

    static findAll(){

        let sql = `SELECT * FROM posts`;
        return db.execute(sql);
    }

    static findById(id){
        let sql = `
        SELECT * FROM posts WHERE id = ${id};
        `;
        return db.execute(sql)
    }
}

module.exports = Post;