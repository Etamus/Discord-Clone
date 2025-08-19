import { Home, Plus, Download, Compass } from "lucide-react";

const servers = [
  { id: "home", type: "home", icon: Home },
  { id: "divider", type: "divider" },
  { id: "server1", type: "server", name: "A", color: "bg-discord-blurple" },
  { id: "server2", type: "server", name: "A", color: "bg-red-500" },
  { id: "server3", type: "server", name: "L", color: "bg-green-500" },
  { id: "server4", type: "server", name: "M", color: "bg-blue-500" },
  { id: "add", type: "add", icon: Plus },
  { id: "discover", type: "discover", icon: Compass },
  { id: "download", type: "download", icon: Download },
];

export function ServerSidebar() {
  return (
    <div className="w-[72px] bg-discord-darkest flex flex-col items-center py-3 space-y-2">
      {servers.map((server) => {
        if (server.type === "divider") {
          return (
            <div key={server.id} className="w-8 h-0.5 bg-discord-hover rounded-full mx-auto" />
          );
        }

        if (server.type === "home") {
          const Icon = server.icon;
          return (
            <div
              key={server.id}
              className="relative group"
            >
              <div className="w-12 h-12 bg-discord-blurple rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center text-white cursor-pointer group-hover:bg-discord-blurple/90">
                <Icon size={28} />
              </div>
              <div className="absolute left-full ml-2 px-2 py-1 bg-black rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Home
              </div>
            </div>
          );
        }

        if (server.type === "server") {
          return (
            <div
              key={server.id}
              className="relative group"
            >
              <div className={`w-12 h-12 ${server.color} rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:opacity-90`}>
                {server.name}
              </div>
              <div className="absolute left-full ml-2 px-2 py-1 bg-black rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Server {server.name}
              </div>
            </div>
          );
        }

        if (server.type === "add") {
          const Icon = server.icon;
          return (
            <div
              key={server.id}
              className="relative group"
            >
              <div className="w-12 h-12 bg-discord-hover rounded-2xl hover:rounded-xl hover:bg-discord-green transition-all duration-200 flex items-center justify-center text-discord-green hover:text-white cursor-pointer">
                <Icon size={24} />
              </div>
              <div className="absolute left-full ml-2 px-2 py-1 bg-black rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Adicionar servidor
              </div>
            </div>
          );
        }

        if (server.type === "discover" || server.type === "download") {
          const Icon = server.icon;
          const label = server.type === "discover" ? "Descobrir servidores" : "Baixar apps";
          return (
            <div
              key={server.id}
              className="relative group"
            >
              <div className="w-12 h-12 bg-discord-hover rounded-2xl hover:rounded-xl hover:bg-discord-green transition-all duration-200 flex items-center justify-center text-discord-green hover:text-white cursor-pointer">
                <Icon size={24} />
              </div>
              <div className="absolute left-full ml-2 px-2 py-1 bg-black rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
