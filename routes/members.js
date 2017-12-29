import express from 'express'
import mysql from 'promise-mysql'
import { db } from '../db/index'
const router = express.Router();

router.get('/', function(req, res) {

  let sql = `
    SELECT m.member_id AS id, m.first_name AS firstName
    FROM members m
  `
  db().then((conn) => {
    return conn.query(sql)
  }).then((rows) => {
    res.send(rows)
  }).catch((err) => {
    console.log('err', err)
  })
})

module.exports = router;
