const {Router} = require('express')
const {perroRouter} = require('../routes/perroRoutes')

const router  = Router()

router.use('/perro',perroRouter)


module.exports = router;
