import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const userDemographicsData = [
    {name: "18-24", value: 20},
    {name: "25-34", value: 30},
    {name: "35-44", value: 25},
    {name: "45-54", value: 15},
    {name: "55+", value: 10},
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

function UserDemographicsChart() {
  return (
    <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md
                 shadow-lg rounded-xl border border-gray-700 p-6
                 lg:col-span-2"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.5 }}
    >
        <h2
         className="text-xl font-semibold mb-4 text-gray-100"
        >
            User Demographics
        </h2>
        <div style={{ width: "100%", height: 300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                      data={userDemographicsData}
                      cx={"50%"}
                      cy={"50%"}
                      outerRadius={100}
                      fill="#8884D8"
                      dataKey='value'
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {userDemographicsData.map((entry,index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB"}}
                    />
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default UserDemographicsChart;