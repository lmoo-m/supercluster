import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Supercluster 57",
    description: "Angkatan 57 SMEA",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}  px-3 md:px-0`}>
                {children}
            </body>
        </html>
    );
}
