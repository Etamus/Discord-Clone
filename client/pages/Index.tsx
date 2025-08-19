import { ServerSidebar } from "../components/ServerSidebar";
import { ChannelSidebar } from "../components/ChannelSidebar";
import { MainContent } from "../components/MainContent";

export default function Index() {
  return (
    <div className="h-screen flex bg-discord-darkest">
      <ServerSidebar />
      <ChannelSidebar />
      <MainContent />
    </div>
  );
}
