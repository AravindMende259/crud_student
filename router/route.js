// import express from 'express';

// import studentcontroller from '../controller/studSchController';

import express from 'express';
import { getStudents, addStudent} from '../controller/studSchController.js';


const router = express.Router();

router.get('/', getStudents);
router.post('/add', addStudent);


export default router;


