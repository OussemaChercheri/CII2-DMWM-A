import mongoose from "mongoose";

const StatisticSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    year: Number,
    monthlyData: [
      {
        mounth: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalReservation: Number,
      },
    ],
    reservationByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const Statistic = mongoose.model("Statistic", StatisticSchema);

module.exports = Statistic;
