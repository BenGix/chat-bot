import { ChatSessionList } from "@/components/chat/ChatSessionList";
import "../styles/font.css";
import "./globals.css";
import { Header } from "@/components/header/Header";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="grid grid-cols-4 h-screen">
        <aside className="hidden md:block col-span-1 p-4 border-l ">
          <ChatSessionList />
        </aside>
        <main className="w-full flex flex-col col-span-4 md:col-span-3">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
