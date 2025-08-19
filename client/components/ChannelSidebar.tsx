import { Search, UserPlus, Settings, Mic, Headphones, MoreHorizontal } from "lucide-react";

const friends = [
  { name: "Higher", status: "Há algumas horas", isOnline: true },
  { name: "Smith", status: "Jogando um jogo engraçado onde você sempre tem que descobrir", isOnline: true },
  { name: "Via", status: "Invisível", isOnline: false },
  { name: "Via", status: "Invisible", isOnline: false },
  { name: "24-3-RGB", status: "Saiu há 6 horas", isOnline: false },
];

export function ChannelSidebar() {
  return (
    <div className="w-60 bg-discord-sidebar flex flex-col">
      {/* Header */}
      <div className="h-12 border-b border-discord-hover flex items-center px-4 shadow-sm">
        <span className="text-white font-semibold">Amigos</span>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-discord-text-muted" size={16} />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-discord-darkest text-discord-text-primary placeholder-discord-text-muted rounded px-10 py-1.5 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 mb-4">
        <div className="flex items-center space-x-2 text-discord-text-secondary text-sm">
          <UserPlus size={16} />
          <span>Online - 5</span>
        </div>
      </div>

      {/* Friends List */}
      <div className="flex-1 overflow-y-auto px-2">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center p-2 rounded hover:bg-discord-hover cursor-pointer group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {friend.name[0]}
              </div>
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-discord-sidebar ${
                  friend.isOnline ? "bg-discord-green" : "bg-discord-text-muted"
                }`}
              />
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <div className="text-discord-text-primary text-sm font-medium">{friend.name}</div>
              <div className="text-discord-text-muted text-xs truncate">{friend.status}</div>
            </div>
            <MoreHorizontal
              className="opacity-0 group-hover:opacity-100 text-discord-text-muted hover:text-discord-text-primary"
              size={16}
            />
          </div>
        ))}
      </div>

      {/* Bottom User Panel */}
      <div className="h-14 bg-discord-darkest flex items-center px-2">
        <div className="flex items-center flex-1">
          <div className="relative">
            <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center text-white font-semibold text-sm">
              O
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-discord-green rounded-full border-2 border-discord-darkest" />
          </div>
          <div className="ml-2 flex-1 min-w-0">
            <div className="text-discord-text-primary text-sm font-medium">Oívio</div>
            <div className="text-discord-text-muted text-xs">#0</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 text-discord-text-muted hover:text-discord-text-primary rounded">
            <Mic size={18} />
          </button>
          <button className="p-1 text-discord-text-muted hover:text-discord-text-primary rounded">
            <Headphones size={18} />
          </button>
          <button className="p-1 text-discord-text-muted hover:text-discord-text-primary rounded">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
