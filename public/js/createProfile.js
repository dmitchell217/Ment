
const findUser = async (id, db) => {
    // console.log(db) db is succesfully ported into this function
    const User = require('./User')(db);
    let result = await User.findById(id)
    return result
}

const prof = async (id, db) => {
    // findUser(id, db)
    let result = await db.one(`SELECT * FROM users WHERE id='${id}'`)
<<<<<<< .merge_file_UmmhaF
    // let profile = 
    // // `
    // <div>${result.username}</div> 
    // <br><a href="/logout">Logout</a>`

=======

    // let profile = 
    // // `
    // <div>${result.username}</div> 
    // <br><a href="/logout">Logout</a>`

>>>>>>> .merge_file_4hVR2j
    return result
}
module.exports = prof




