import { useState } from "react";
import {
  Search,
  UserPlus,
  Settings,
  Mic,
  Headphones,
  MoreHorizontal,
  MicOff,
} from "lucide-react";
import { UserMenu } from "./UserMenu";

const friends = [
  { name: "Teste", status: "Há algumas horas", isOnline: true },
];

interface ChannelSidebarProps {
  onOpenSettings: () => void;
  onShowToast: (toast: { type: "success" | "error" | "info"; title: string; message: string }) => void;
}

export function ChannelSidebar({ onOpenSettings, onShowToast }: ChannelSidebarProps) {
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userStatus, setUserStatus] = useState("online");
  const [searchTerm, setSearchTerm] = useState("");

  const handleMicToggle = () => {
    setIsMicMuted(!isMicMuted);
    onShowToast({
      type: "info",
      title: isMicMuted ? "Microfone ativado" : "Microfone desativado",
      message: isMicMuted ? "Você pode falar novamente" : "Outros não conseguem te ouvir"
    });
  };

  const handleHeadphonesToggle = () => {
    setIsDeafened(!isDeafened);
    if (!isDeafened) {
      setIsMicMuted(true); // Discord automatically mutes mic when deafened
    }
    onShowToast({
      type: "info",
      title: isDeafened ? "Som ativado" : "Som desativado", 
      message: isDeafened ? "Você pode ouvir novamente" : "Você não consegue ouvir nada"
    });
  };

  const handleStatusChange = (status: string) => {
    setUserStatus(status);
    const statusLabels: Record<string, string> = {
      online: "Online",
      away: "Ausente", 
      busy: "Ocupado",
      invisible: "Invisível"
    };
    onShowToast({
      type: "success",
      title: "Status alterado",
      message: `Seu status foi alterado para ${statusLabels[status]}`
    });
  };

  const handleEditProfile = () => {
    onShowToast({
      type: "info",
      title: "Editar perfil",
      message: "Funcionalidade de edição de perfil em desenvolvimento"
    });
  };

  const handleSwitchAccount = () => {
    onShowToast({
      type: "info",
      title: "Trocar conta",
      message: "Funcionalidade de trocar conta em desenvolvimento"
    });
  };

  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-60 bg-discord-sidebar flex flex-col">
      {/* Header */}
      <div className="h-12 border-b border-discord-hover flex items-center px-4 shadow-sm">
        <span className="text-white font-semibold">Amigos</span>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-discord-text-muted"
            size={16}
          />
          <input
            type="text"
            placeholder="Buscar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-discord-darkest text-discord-text-primary placeholder-discord-text-muted rounded px-10 py-1.5 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 mb-4">
        <div className="flex items-center space-x-2 text-discord-text-secondary text-sm">
          <UserPlus size={16} />
          <span>Online - {filteredFriends.filter(f => f.isOnline).length}</span>
        </div>
      </div>

      {/* Friends List */}
      <div className="flex-1 overflow-y-auto px-2">
        {filteredFriends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center p-2 rounded hover:bg-discord-hover cursor-pointer group"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center text-white font-semibold text-sm">
                T
              </div>
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-discord-sidebar ${
                  friend.isOnline ? "bg-discord-green" : "bg-discord-text-muted"
                }`}
              />
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <div className="text-discord-text-primary text-sm font-medium">
                {friend.name}
              </div>
              <div className="text-discord-text-muted text-xs truncate">
                {friend.status}
              </div>
            </div>
            <MoreHorizontal
              className="opacity-0 group-hover:opacity-100 text-discord-text-muted hover:text-discord-text-primary"
              size={16}
            />
          </div>
        ))}
      </div>

      {/* Bottom User Panel */}
      <div className="h-14 bg-discord-darkest flex items-center px-2 relative">
        <button 
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center flex-1 hover:bg-discord-hover rounded p-1 transition-colors"
        >
          <div className="relative">
            <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center text-white font-semibold text-sm">
              E
            </div>
            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-discord-darkest ${
              userStatus === "online" ? "bg-discord-green" :
              userStatus === "away" ? "bg-yellow-500" :
              userStatus === "busy" ? "bg-red-500" : "bg-discord-text-muted"
            }`} />
          </div>
          <div className="ml-2 flex-1 min-w-0">
            <div className="text-discord-text-primary text-sm font-medium">
              Etamus
            </div>
            <div className="text-discord-text-muted text-xs">#0</div>
          </div>
        </button>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handleMicToggle}
            className={`p-1 rounded transition-colors ${
              isMicMuted 
                ? "text-discord-red hover:text-discord-red/80 bg-discord-red/20" 
                : "text-discord-text-muted hover:text-discord-text-primary"
            }`}
            title={isMicMuted ? "Ativar microfone" : "Desativar microfone"}
          >
            {isMicMuted ? <MicOff size={18} /> : <Mic size={18} />}
          </button>
          <button 
            onClick={handleHeadphonesToggle}
            className={`p-1 rounded transition-colors ${
              isDeafened 
                ? "text-discord-red hover:text-discord-red/80 bg-discord-red/20" 
                : "text-discord-text-muted hover:text-discord-text-primary"
            }`}
            title={isDeafened ? "Ativar som" : "Desativar som"}
          >
            <Headphones size={18} />
          </button>
          <button 
            onClick={onOpenSettings}
            className="p-1 text-discord-text-muted hover:text-discord-text-primary rounded transition-colors"
            title="Configurações do usuário"
          >
            <Settings size={18} />
          </button>
        </div>
        
        <UserMenu
          isOpen={isUserMenuOpen}
          onClose={() => setIsUserMenuOpen(false)}
          onEditProfile={handleEditProfile}
          onChangeStatus={handleStatusChange}
          onSwitchAccount={handleSwitchAccount}
          currentStatus={userStatus}
        />
      </div>
    </div>
  );
}
