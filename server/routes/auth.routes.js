const Router = require("express")
const User = require("../models/User")
const router = new Router()
const bcrypt = require("bcrypt")
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/registration", [
    check("email", "Сіз енгізген пошта қате").isEmail(),
    check("password", "Құпия сөз 3 тен жоғары және 12 ден көп болмау керек").isLength({
        min: 3,
        max: 12
    })
], async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Uncorrect request", errors
            })
        }
        const {email, password} = req.body

        const candidate = await User.findOne({
            email
        })

        if (candidate) {
            return res.status(400).json({
                message: `${email} Қолданушы желіде тіркелген!`
            })
        }

        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword})
        
        await user.save()

        return res.json({
            message: "Қолданушы тіркелді!"
        })

    } catch (err) {
        res.send({
            message: "Серверден қате келді!"
        })
        console.log(err)
    }
})

router.post("/login", async (req, res) => {
    try {
        
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({
                message: "Қолданушы табылмады!"
            })
        }

        const isPassValid = bcrypt.compareSync(password, user.password)

        if(!isPassValid) {
            return res.status(400).json({
                message: "Қате құпия сөз"
            })
        }

        const token = jwt.sign({
            id: user.id
        }, config.get("secretKey"),
        {
            expiresIn: "1h"
        })

        return res.json({
            token, 
            user: {
                id: user.id,
                email: user.email,
                university: user.university,
                faculty: user.faculty,
                avatar: user.avatar
            }
        })
    } catch (err) {
        res.send({
            message: "Серверден қате келді"
        })
        console.log(err)
    }
})

module.exports = router