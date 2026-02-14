import jwt from "jsonwebtoken"

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { admintoken } = req.headers

        // Check if token exists
        if (!admintoken) {
            return res.json({
                success: false,
                message: 'Not authorized. Login again'
            })
        }

        // Verify token is valid
        const token_decode = jwt.verify(admintoken, process.env.JWT_SECRET) // Verifies email + password 

        // Extra security check:Ensures the token belongs to the correct admin + matches stored credentials
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({
                success: false,
                message: 'Not authorized. Login again'
            })
        }

        // Admin is authenticated. Access granted.
        next()

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}

export default authAdmin