"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
// src/modules/wallet/wallet.model.ts
const mongoose_1 = require("mongoose");
const walletSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true, unique: false },
    // from: { type: Schema.Types.Mixed, required: false },
    // to: { type: Schema.Types.Mixed, required: false },
    balance: { type: Number, required: true, default: 50 },
    isBlocked: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Wallet = (0, mongoose_1.model)('Wallet', walletSchema);
