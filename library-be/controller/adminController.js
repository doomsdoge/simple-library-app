const { sequelize } = require('../models')
const { Op } = require('sequelize')

const db = require('../models/index')

module.exports = {
    login: async(req, res) => {
        try {
            
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    }
}