const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

// Define API routes for courses
// The path for all these routes will be prefixed with /api/courses
router.post('/', coursesController.createCourse);
router.get('/', coursesController.getCourses);
router.get('/:id', coursesController.getCourseById);
router.put('/:id', coursesController.updateCourse);
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;