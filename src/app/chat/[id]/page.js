"use client";
import { useParams } from "next/navigation";
import useChatStore from "@/store/useChatStore";
import { Chat } from "@/components/Chat";

export default function ChatPage() {
  const { id } = useParams(); // Get the session ID from the URL
  const { chatSessions } = useChatStore((state) => ({
    chatSessions: state.chatSessions,
  }));

  // Debugging: Log the ID and chatSessions
  console.log("Session ID from params:", id);
  console.log("Chat sessions:", chatSessions);

  // Find the selected session based on the ID
  const selectedSession = chatSessions.find((session) => session.id === id);

  // Debugging: Log the selected session
  console.log("Selected session:", selectedSession);

  // Check if the selected session exists and has the required structure
  if (!selectedSession || !Array.isArray(selectedSession.messages)) {
    return <div>Invalid session data or session not found</div>;
  }

  // Convert the messages into the format required by the Chat component
  const initialMessages = selectedSession.messages.flatMap((message) => [
    { type: "user", content: message.userMessage },
    { type: "bot", content: message.apiResponse },
  ]);

  return <Chat initialMessages={initialMessages} />;
}
