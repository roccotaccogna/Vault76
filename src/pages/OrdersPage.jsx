import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersList from "../components/orders/OrdersList";

const ordersStats = {
    totalOrders: "1,234",
    pendingOrders: "56",
    completeOrders: "1,178",
    totalRevenue: "$98,765"
};

function OrdersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title="Orders"/>

    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      
      {/* ORDERS STATS */}
      <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2
                       lg:grid-cols-4 mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 20}}
            transition={{duration: 1 }}
      >

            <StatCard
                name="Total Orders" 
                icon={ShoppingBag} 
                value={ordersStats.totalOrders}
                color= "#6366F1"
            />
            <StatCard
                name="Pending Orders" 
                icon={Clock} 
                value={ordersStats.pendingOrders}
                color= "#F59E0B"
            />
            <StatCard
                name="Completed Orders" 
                icon={CheckCircle} 
                value={ordersStats.completeOrders}
                color= "#10B981"
            />
            <StatCard
                name="Total Revenue" 
                icon={DollarSign} 
                value={ordersStats.totalRevenue}
                color= "#EF4444"
            />

      </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <DailyOrders />
                <OrderDistribution />
            </div>

            <OrdersList/>
    </main>
    </div>
  )
}

export default OrdersPage