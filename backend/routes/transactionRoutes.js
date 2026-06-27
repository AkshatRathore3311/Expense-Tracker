const express = require("express");
const Transaction = require("../models/Transaction");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add Transaction
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { text, amount, type } = req.body;

    const transaction = new Transaction({
      userId: req.user.id,
      text,
      amount,
      type,
    });

    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Get Transactions
router.get("/", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.user.id,
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Delete Transaction
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);

    res.json({
      message: "Transaction Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;