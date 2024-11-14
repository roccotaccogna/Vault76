import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

const userGrowthData = [
  {name: "Jan", users: 1000 },
  {name: "Feb", users: 1500 },
  {name: "Mar", users: 2000 },
  {name: "Apr", users: 3000 },
  {name: "May", users: 4000 },
  {name: "Jun", users: 5000 },
];

function UserGrowthChart() {
return (
  <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md
               shadow-lg rounded-lg border border-gray-700 p-6"
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.3 }}
  >
      <h2 className="text-lg font-semibold mb-4 text-gray-100">
          User Growth
      </h2>

      <div className="h-[320px]">
          <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={userGrowthData}>
               <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
               <XAxis dataKey={"name"} stroke="#9CA3AF"/>
               <YAxis stroke="#9CA3AF"/>
               <Tooltip
                  contentStyle={{
                      backgroundColor: "rgba(31, 41, 55, 0.8)",
                      borderColor: "#4B5563",
                  }}
                  itemStyle={{ color: "#E5E7EB"}}
               />
                <Line 
                  type="monotone"
                  dataKey="users"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                  activeDot= {{ r:8 }}
                />
              </LineChart>
          </ResponsiveContainer>
      </div>
  </motion.div>
)
}

export default UserGrowthChart;