import "./style/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "AI Product Hub",
  description: "Manage and filter products efficiently.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}