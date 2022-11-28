import { ContactsChat, Chat } from "./";

export const ChatContainer = () => {
  return (
    <div className="h-[600px] w-11/12 bg-slate-800 grid grid-cols-3">
      <ContactsChat />
      <Chat />
    </div>
  );
};
