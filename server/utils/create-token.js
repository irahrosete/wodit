import jwt from 'jsonwebtoken'

export const maxAge = 24 * 60 * 60 // 1 day, jwt expects time in seconds

export const createToken = (user) => {
  return jwt.sign(user, process.env.SECRET, {
    expiresIn: maxAge,
  })
}
