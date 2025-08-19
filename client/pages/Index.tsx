import { useState } from "react";
import { ServerSidebar } from "../components/ServerSidebar";
import { ChannelSidebar } from "../components/ChannelSidebar";
import { MainContent } from "../components/MainContent";
import { UserSettingsModal } from "../components/UserSettingsModal";
import { ToastContainer, useToast } from "../components/Toast";

export default function Index() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="h-screen flex bg-discord-darkest">
      <ServerSidebar />
      <ChannelSidebar
        onOpenSettings={handleOpenSettings}
        onShowToast={addToast}
      />
      <MainContent
        onShowToast={addToast}
      />

      <UserSettingsModal
        isOpen={isSettingsOpen}
        onClose={handleCloseSettings}
      />

      <ToastContainer
        toasts={toasts}
        onRemove={removeToast}
      />
    </div>
  );
}
