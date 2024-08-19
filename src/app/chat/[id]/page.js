"use client";
import { useParams } from "next/navigation";
import useChatStore from "@/store/useChatStore";
import { Chat } from "@/components/Chat";

export default function ChatPage() {
  const { id } = useParams();
  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  const selectedSession = chatSessions.find((session) => session.id === id);

  console.log("Selected session:", selectedSession);

  if (!selectedSession || !Array.isArray(selectedSession.messages)) {
    return <div>Invalid session data or session not found</div>;
  }

  const initialMessages = selectedSession.messages.flatMap((message) => [
    {
      type: "user",
      content: message.userMessage,
      timestamp: message.timestamp,
    },
    { type: "bot", content: message.apiResponse },
  ]);

  return <Chat initialMessages={initialMessages} />;
}
