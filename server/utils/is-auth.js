import jwt from 'jsonwebtoken'

export const isAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        res.status(401).send({ message: 'Invalid Token' })

        // res.redirect('/login')
      } else {
        console.log(decodedToken)
        next()
      }
    })
  } else {
    // res.redirect('/login')
    res.status(401).send({ message: 'No Token' })
  }
}
