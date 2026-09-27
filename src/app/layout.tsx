import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFF] text-[#07152F] antialiased selection:bg-[#1468E8] selection:text-white">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}