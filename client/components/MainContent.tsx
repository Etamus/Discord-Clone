import { MessageSquare, Phone, Video, UserPlus, Search } from "lucide-react";

export function MainContent() {
  return (
    <div className="flex-1 bg-discord-dark flex flex-col">
      {/* Header */}
      <div className="h-12 border-b border-discord-hover flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center">
          <MessageSquare className="text-discord-text-muted mr-2" size={20} />
          <span className="text-white font-semibold">Amigos</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-discord-text-muted hover:text-white p-1 rounded">
            <Phone size={20} />
          </button>
          <button className="text-discord-text-muted hover:text-white p-1 rounded">
            <Video size={20} />
          </button>
          <button className="text-discord-text-muted hover:text-white p-1 rounded">
            <UserPlus size={20} />
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-discord-text-muted" size={16} />
            <input
              type="text"
              placeholder="Buscar"
              className="bg-discord-darkest text-discord-text-primary placeholder-discord-text-muted rounded pl-10 pr-4 py-1 text-sm focus:outline-none w-36"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-2 border-b border-discord-hover">
        <div className="flex space-x-6">
          <button className="text-discord-text-primary font-medium pb-2 border-b-2 border-discord-blurple">
            Online
          </button>
          <button className="text-discord-text-muted hover:text-discord-text-primary pb-2">
            Todos
          </button>
          <button className="text-discord-text-muted hover:text-discord-text-primary pb-2">
            Pendente
          </button>
          <button className="text-discord-text-muted hover:text-discord-text-primary pb-2">
            Bloqueado
          </button>
          <button className="bg-discord-green text-white px-4 py-1 rounded text-sm font-medium ml-auto">
            Adicionar amigo
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Friends List */}
        <div className="flex-1 p-4">
          <h2 className="text-discord-text-primary text-lg font-semibold mb-4">
            ONLINE - 5
          </h2>
          
          <div className="space-y-1">
            {[
              { name: "Higher", status: "Há algumas horas", avatar: "H" },
              { name: "Smith", status: "Jogando um jogo engraçado onde você sempre tem que descobrir", avatar: "S" },
              { name: "Via", status: "Invisível", avatar: "V" },
              { name: "Via", status: "Invisible", avatar: "V" },
              { name: "24-3-RGB", status: "Saiu há 6 horas", avatar: "2" },
            ].map((friend, index) => (
              <div
                key={index}
                className="flex items-center p-2 rounded hover:bg-discord-hover cursor-pointer group"
              >
                <div className="relative mr-3">
                  <div className="w-8 h-8 bg-discord-blurple rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {friend.avatar}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-discord-green rounded-full border-2 border-discord-dark" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-discord-text-primary font-medium">{friend.name}</div>
                  <div className="text-discord-text-muted text-sm truncate">{friend.status}</div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100">
                  <button className="p-2 bg-discord-darkest rounded-full hover:bg-discord-hover text-discord-text-muted hover:text-white">
                    <MessageSquare size={16} />
                  </button>
                  <button className="p-2 bg-discord-darkest rounded-full hover:bg-discord-hover text-discord-text-muted hover:text-white">
                    <Phone size={16} />
                  </button>
                  <button className="p-2 bg-discord-darkest rounded-full hover:bg-discord-hover text-discord-text-muted hover:text-white">
                    <Video size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Now Sidebar */}
        <div className="w-80 bg-discord-sidebar border-l border-discord-hover p-4">
          <h3 className="text-discord-text-primary font-semibold text-lg mb-2">Ativo agora</h3>
          <div className="text-center mt-16">
            <div className="text-discord-text-secondary text-sm mb-2">Por enquanto, est�� quieto...</div>
            <div className="text-discord-text-muted text-xs leading-relaxed">
              Quando um amigo iniciar uma atividade — como jogar um jogo ou participar de uma chamada de voz — você poderá vê-lo aqui!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
