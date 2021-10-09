import jwt from 'jsonwebtoken'

export const maxAge = 1 * 60 * 60 // 1 hr, jwt expects time in seconds

export const createToken = (user) => {
  return jwt.sign(user, process.env.SECRET, {
    expiresIn: maxAge,
  })
}
