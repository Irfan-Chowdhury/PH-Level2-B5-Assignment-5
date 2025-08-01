import express from 'express';
// import auth from '../middlewares/auth';
import { getAllTransactions, getMyTransactions } from './transaction.controller';
import { checkAuth } from '../../middlewares/checkAuth';
import { Role } from '../user/user.interface';

const router = express.Router();

// Users should be able to : View transaction history
router.get(
    '/my-transactions',
    checkAuth(Role.USER, Role.AGENT),
    getMyTransactions
);

router.get(
    '/all',
    checkAuth(Role.ADMIN),
    getAllTransactions
);


export const TransactionRoutes = router;
