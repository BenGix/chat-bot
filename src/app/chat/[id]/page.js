"use client";
import { useParams } from "next/navigation";
import useChatStore from "@/store/useChatStore";
import { Chat } from "@/components/Chat";

export default function ChatPage() {
  const { id } = useParams();
  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  const selectedSession = chatSessions[Number(id)];

  return (
    <Chat
      initialMessages={[
        { type: "user", content: selectedSession.userMessage },
        { type: "bot", content: selectedSession.apiResponse },
      ]}
    />
  );
}
