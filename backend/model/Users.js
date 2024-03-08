import { connection as db } from "../config/index.js";
import bcrypt from "bcryptjs";
import { createToken } from "../middleware/AuthenticateUser.js";
class Users {
  fetchUsers(req, res) {
    const qry = `
        SELECT userID,firstName,lastName,userAge,gender,userRole,emailAdd, userPass, userProfile
        FROM USERS
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const qry = `
    SELECT userID,firstName,lastName,userAge,gender,userRole,emailAdd, userPass, userProfile
    FROM USERS
        WHERE userID = ${req.params.id}
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  async createUser(req, res) {
    //payload
    let data = req.body;
    data.userPwd = await bcrypt.hash(data?.userPwd, 10);
    let user = {
      emailAdd: data.emailAdd,
      userPwd: data.userPwd,
    };
    const qry = `
    INSERT INTO USERS
    SET ?;
    `;
    db.query(qry, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "already exists.please use another email address",
        });
      } else {
        //create token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "You're registered",
        });
      }
    });
  }
  deleteUsers(req, res) {
    const qry = `DELETE FROM USERS ;`;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Users are deleted!",
      });
    });
  }
  deleteUser(req, res) {
    const qry = `DELETE FROM USERS WHERE userID=${req.params.id} ;`;
    // const user = req.body
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Users are deleted!",
      });
    });
  }
  async updateUser(req, res) {
    let data = req.body;
    if (data?.userPwd) {
      data.userPwd = await hash(data?.userPwd, 8);
    }
    const qry = `
  UPDATE USERS
  SET ?
  WHERE userID = ${req.params.id};`;
    db.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User updated!",
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPwd } = req.body;
    const qry = `SELECT userID,firstName,lastName,userAge,gender,userRole,emailAdd, userPass,  userProfile
  FROM USERS
  WHERE emailAdd='${emailAdd}'`;
    db.query(qry, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email address",
        });
      } else {
        const validPass = await bcrypt.compare(userPwd, result[0].userPwd);
        if (validPass) {
          const token = createToken({
            emailAdd,
            userPwd,
          });
          res.json({
            status: res.statusCode,
            msg: "You logged in",
            result,
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please provide correct password",
            result,
          });
        }
      }
    });
  }
}
export { 
  Users 
};