const loginController = require('../controllers/loginController.js')

const router = require('express').Router()
// @access  Public
/**
 * @swagger
 * '/api/register/registerUser':
 *  post:
 *     summary: Register a user.
 *     description: Creates a user, API used for manual registration.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email           
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: manasi@gmail.com
 *              password:
 *                type: string
 *                default: manasiii
 *     responses:
 *      200:
 *        description: Created
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Unauthorized
 *      500:
 *        description: Internal Server Error
 *      
 */

router.post('/registerUser', loginController.registerUser)

router.post('/loginUser', loginController.loginUser)

// @access  Public
/**
   * @swagger
   * /api/register/registerUsers:
   *  get:
   *    summary: Get all the registered users.
   *    description: Returns all the user list and is public API for testing only
   *    responses:
   *      '200':
   *        description: A successful response
   *      '400':
   *        description: Bad request
   *      '500':
   *        description: Internal Server Error
   */
router.get('/registerUsers', loginController.getAllUser)

router.get('/:id', loginController.getOneUser)

router.put('/:id', loginController.updateUser)

router.delete('/:id', loginController.deleteUser)

module.exports = router
