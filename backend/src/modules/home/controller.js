import User from '../../models/users'

/**
 * @api {post} /rsvp Create a new rsvp
 * @apiPermission
 * @apiVersion 1.0.0
 * @apiName CreateRsvp
 * @apiGroup Rsvp
 *
 */
export async function createRsvp (ctx) {
  ctx.body = {
    example: "hello world",
  }
}

/**
 * @api {get} /rsvp Get RSVP from a person
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X GET localhost:5000/users
 *
 * @apiSuccess {Object[]} users           Array of user objects
 * @apiSuccess {ObjectId} users._id       User id
 * @apiSuccess {String}   users.name      User name
 * @apiSuccess {String}   users.username  User username
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "users": [{
 *          "_id": "56bd1da600a526986cf65c80"
 *          "name": "John Doe"
 *          "username": "johndoe"
 *       }]
 *     }
 *
 * @apiUse TokenError
 */
export async function getRsvp (ctx) {
  //const users = await User.find({}, '-password')
  const users = {"Foo": "Bar"};
  ctx.body = { users }
}


