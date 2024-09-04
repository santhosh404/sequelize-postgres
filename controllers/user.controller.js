const { User } = require("../models")

const getUserHandler = async (req, res) => {
    try {
        const users = await User.findAll({ include: 'post' });
        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Users retrieved',
            data: {
                user: users
            }
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error retrieving users',
            data: {
                error: err.message
            }
        })
    }
}

const getUserByUuidHandler = async (req, res) => {
    const { uuid } = req.params;
    try {
        const user = await User.findOne({
            where: { uuid: uuid },
            include: 'post'
        });
        if(!user) {
            return res.status(404).json({
                success: false,
                status: 404,
                message: `User with uuid ${uuid} not found`,
                data: {
                    user: null
                }
            })
        }
        return res.status(200).json({
            success: true,
            status: 200,
            message: 'User retrieved',
            data: {
                user: user
            }
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error retrieving users',
            data: {
                error: err.message
            }
        })
    }
}

const createUserHandler = async (req, res) => {
    const { name, email, role } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            role
        })
        return res.status(201).json({
            success: true,
            status: 201,
            message: 'User created',
            data: {
                user: user
            }
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error creating user',
            data: {
                error: err.message
            }
        })
    }

}

module.exports = {
    getUserHandler,
    getUserByUuidHandler,
    createUserHandler
}