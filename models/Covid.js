// import database
const db = require("../config/database");

// membuat class Model Covid
class Covid {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from covids";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data Covids yang baru diinsert.
   */
  static create() {
    // code here
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO covids (name, phone, address, status) VALUES (?,?,?,?)";
      const value = [data.name, data.phone, data.address, data.status];
      db.query(sql, value, (err, result) => {
        resolve(result);
      })
    });
  }
}

// export class Covid
module.exports = Covid;