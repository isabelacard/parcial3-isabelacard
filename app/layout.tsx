import Navbar from "@/shared/components/navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-base-200">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl p-2">{children}</main>
      </body>
    </html>
  );
}
