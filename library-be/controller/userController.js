const { sequelize } = require('../models')
const { Op } = require('sequelize')

const db = require('../models/index')
const user = db.user

const { hashMatch, hashPassword } = require('../lib/hash')

module.exports = {
    register: async(req, res) => {
        try {
            // get value from body
            let { NIM, username, email, password } = req.body

            // check password eligibility
            if(
                !password.match(
                    /^(?=.*[a-zA-Z])(?=.*[0-9])/
                ) ||
                password.length < 6 ||
                password.length > 10
            ) {
                return res.status(404).send({
                    isError: true,
                    message: "password must contain at least 1 number and 1 alphabet, and needs to be 6-10 character long",
                    data: null
                })
            }

            // insert data to user table
            await user.create({
                NIM,
                username,
                email,
                password: await hashPassword(password)
            })

            // send response
            res.status(201).send({
                isError: false,
                message: 'Register success',
                data: null
            })

        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    login: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
}