db.createUser({
    user: "user",
    pwd: "secretPassword",
    roles: [ { role: "dbOwner", db: "realestate" } ]
})
  
db.users.insert({
    name: "user"
})