import React from "react";
import { FiInstagram } from "react-icons/fi";
import { RiSpotifyLine, RiThreadsFill } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { Mouse_Memoirs } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

import logo from "@/images/ss.png";

const mouse_memoirs = Mouse_Memoirs({
    subsets: ["latin"],
    weight: "400",
});

const links = [
    {
        title: "Spotify",
        url: "https://open.spotify.com/user/3146uwlpaqhvfbjek5vrd6lgqx7e?si=GO5AGkgZTXihyK6DFuHYRA&utm_source=copy-link&fbclid=PAAabjXwKSC35HGZuziw7H2SHtCjysL-UrkIFosp6Kn-4_zIxy4hELA19rqxc&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fuser%2F3146uwlpaqhvfbjek5vrd6lgqx7e%3Fsi%3DGO5AGkgZTXihyK6DFuHYRA%26utm_source%3Dcopy-link%26fbclid%3DPAAabjXwKSC35HGZuziw7H2SHtCjysL-UrkIFosp6Kn-4_zIxy4hELA19rqxc&~channel=copy-link&feature=organic&_branch_match_id=1280064189980430515&_branch_referrer=H4sIAAAAAAAAA91P22qDQBT8GvOmknijBSkSowYDLU0LaV7Cuq66utld95Jovr5rof2IwoEDM2dmznRKcfnsupIzhZvZAZw7BNPBfeGC1RqqmHFEV9bGbzQhFy1I3C0Sy0usTWZmoZ1fNWRXA2mJhFne2g%2F1nXAwdrem6tEQ3EQdknacImR5mcSWl%2BavQZIP7fnjhLu5DNNMF1%2FvxjnU6nqRTAtoTlPI%2BGwvXxmiqSDBtQHfkgRU%2FeleHrdeUORn%2FcD3qNgcC7XtZ3mwP8Wwz5jkYUlt%2F%2FLYT7Pf7Q7J%2BkmME%2FwpBAipABz%2BTSljRBeT9cqKdrADlCIS%2F8WsGgSUFihmogUUw2%2BYvPea%2BgEAAA%3D%3D",
        icon: <RiSpotifyLine />,
        color: "green",
    },
    {
        title: "Telegram",
        url: "https://t.me/Supercluster_bot",
        icon: <PiTelegramLogo />,
        color: "#0000FF",
    },
    {
        title: "Threads",
        url: "https://www.threads.net/@supercluster57",
        icon: <RiThreadsFill />,
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/supercluster57",
        icon: <FiInstagram />,
        color: "#d62976",
    },
];

const title = "Supercluster";

function Card() {
    return (
        <motion.div
            className="relative overflow-hidden"
            initial={{ top: 15, height: "14rem" }}
            animate={{ top: "-4rem", height: "110%" }}
            transition={{
                delay: 1.4,
                type: "spring",
            }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                }}
                className="shadow-2xl rounded-md w-[10rem] h-[10rem] bg-white mx-auto overflow-hidden"
            >
                <Image
                    src={logo}
                    alt="logo"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.div className="mt-5">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 0.2,
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className={`${mouse_memoirs.className} font-bold text-3xl mb-3`}
                >
                    {title.split("").map((char, i) => {
                        return (
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                key={i}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-[#31363fda]"
                >
                    Salutations, our Supercluster 🌟 <br />
                    Based on a true story{" "}
                    <span className="text-[#222831]">
                        Angkatan 57 SMKN 1 Slawi
                    </span>
                </motion.p>
                <motion.div
                    className="flex justify-around mt-5"
                    transition={{
                        delay: 1.5,
                    }}
                >
                    {links.map((link, i) => {
                        return (
                            <motion.a
                                initial={{ y: 25 }}
                                animate={{ y: 0 }}
                                href={link.url}
                                key={i}
                                target="_blank"
                                className=" p-3 border btn-link relative inline-block"
                                whileHover={{
                                    y: -3,
                                    scale: 1.1,
                                    color: link.color,
                                }}
                                transition={{
                                    type: "spring",
                                }}
                            >
                                {link.icon}
                            </motion.a>
                        );
                    })}
                </motion.div>

                <div className="relative top-[2rem] font-extralight">
                    &copy; 2024
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Card;
