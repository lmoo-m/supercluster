"use client";

import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="flex h-[100dvh] items-center justify-center flex-col">
            <motion.div
                className="text-center bg-white px-3 rounded-md shadow-xl"
                initial={{ height: "15rem" }}
                animate={{ height: "auto" }}
                transition={{ delay: 1.5, type: "spring" }}
            >
                <Card />
            </motion.div>
        </main>
    );
}
