const { User, Post } = require('../models');

const createPostHandler = async(req, res) => {
    const { uuid, body } = req.body;
    try {
        const user = await User.findOne({ where: { uuid: uuid } });
        const post = await Post.create({
            body,
            userId: user.id
        }, {
            include: ['user']
        })
        return res.status(201).json({
            success: true,
            status: 201,
            message: 'Post created',
            data: {
                post: post
            }
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error creating post',
            data: {
                error: err.message
            }
        })
    }
}

const findAllPostHandler = async (req, res) => {
    try {
        const post = await Post.findAll({ include: 'user' })
        return res.status(201).json({
            success: true,
            status: 201,
            message: 'Post retrieved',
            data: {
                post: post
            }
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error retreiving post',
            data: {
                error: err.message
            }
        })
    }
}

module.exports = {
    createPostHandler,
    findAllPostHandler
}