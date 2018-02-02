import passport from 'koa-passport'
import User from '../../models/users'
import config from '../../../config'
import { decode } from 'jsonwebtoken'
import resetEmail from '../../utils/passwordResetEmail'

/**
 * @apiDefine TokenError
 * @apiError Unauthorized Invalid JWT token
 *
 * @apiErrorExample {json} Unauthorized-Error:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

/**
 * @api {post} /auth Authenticate user
 * @apiVersion 1.0.0
 * @apiName AuthUser
 * @apiGroup Auth
 *
 * @apiParam {String} username  User username.
 * @apiParam {String} password  User password.
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X POST -d '{ "username": "johndoe@gmail.com", "password": "foo" }' localhost:5000/auth
 *
 * @apiSuccess {Object}   user           User object
 * @apiSuccess {ObjectId} user._id       User id
 * @apiSuccess {String}   user.name      User name
 * @apiSuccess {String}   user.username  User username
 * @apiSuccess {String}   token          Encoded JWT
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "username": "johndoe"
 *        },
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *     }
 *
 * @apiError Unauthorized Incorrect credentials
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

export async function authUser (ctx, next) {

  return passport.authenticate('local', (user) => {

    if (!user) ctx.throw(401);
    if (!user.active) ctx.throw(401);

    const token = user.generateToken()
    const response = user.toJSON()

    delete response.password

    ctx.body = {
      token,
      user: response
    }
  })(ctx, next)
}


/**
 * @apiDefine TokenError
 * @apiError Unauthorized Invalid JWT token
 *
 * @apiErrorExample {json} Unauthorized-Error:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

/**
 * @api {post} /confirm/:id Authenticate user
 * @apiVersion 1.0.0
 * @apiName AuthUser
 * @apiGroup Auth
 *
 * @apiParam {String} username  User username.
 * @apiParam {String} password  User password.
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X POST -d '{ "username": "johndoe@gmail.com", "password": "foo" }' localhost:5000/auth
 *
 * @apiSuccess {Object}   user           User object
 * @apiSuccess {ObjectId} user._id       User id
 * @apiSuccess {String}   user.name      User name
 * @apiSuccess {String}   user.username  User username
 * @apiSuccess {String}   token          Encoded JWT
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "username": "johndoe"
 *        },
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *     }
 *
 * @apiError Unauthorized Incorrect credentials
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

export async function confirmUser (ctx, next) {
  const token = ctx.params.id;
  if (!token) ctx.throw(401);
  let decoded = null

  try {
    decoded = decode(token, config.token)
  } catch (err) {
    ctx.throw(401)
  }

  // if the code expired
  if (Math.floor(new Date() / 1000) > decoded.expiresIn) ctx.throw(440);

  // find the user
  const user = await User.findById(decoded.id, '-password')

  // if the user doesn't exist
  if (!user) ctx.throw(449);

  await User.update({ _id: decoded.id }, { $set: { active: true }});

  console.log(user);

  ctx.body = { message:'confirmed' };
}




/**
 * @apiDefine Reset Password Email
 * @apiError Unauthorized Invalid JWT token
 */

/**
 * @api {post}
 * @apiVersion 1.0.0
 * @apiName sendResetEmail
 * @apiGroup Auth
 *
 * @apiParam {String} username  User username.
 * @apiParam {String} password  User password.
 *
 */
export async function sendResetEmail (ctx, next) {
  const referrer = ctx.request.headers.origin;
  const username = ctx.request.body.user.username

  try {
    const user = await User.findOne({ username })

    if (!user) ctx.throw(404);

    const token = user.generateToken();
    await resetEmail(referrer, token, username);

    ctx.body = { message: 'success'}
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      ctx.throw(404)
    }
    ctx.throw(500)
  }
  
  if (next) { return next() }
}


/**
 * Cause you know how it goes
 */
export async function resetPassword(ctx, next) {
  let updatedUser = ctx.request.body.user;

  // do some validation here... don't be lazy
  try {
    await User.findOne({ username: updatedUser.username })
      .then((res) => {
        res.password = updatedUser.password;
        res.save();
      });

  } catch (err) {
    if(err) ctx.throw(449);
  }
  
  ctx.body = { notification: 'success'}
  if (next) { return next() }
}
