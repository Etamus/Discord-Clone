import { useState } from "react";
import { X, Search } from "lucide-react";

interface UserSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const settingsMenuItems = [
  { category: "CONFIGURAÇÕES DE USUÁRIO", items: [
    "Minha conta",
    "Perfis", 
    "Conteúdo e social",
    "Dados e privacidade",
    "Central da Família",
    "Aplicativos autorizados",
    "Dispositivos",
    "Conexões",
    "Clipes"
  ]},
  { category: "CONFIGURAÇÕES DE COBRANÇA", items: [
    "Nitro",
    "Impulso de servidor",
    "Assinaturas",
    "Inventário de presentes",
    "Cobrança"
  ]},
  { category: "CONFIG. DO APLICATIVO", items: [
    "Aparência",
    "Acessibilidade", 
    "Voz e vídeo",
    "Bate-papo",
    "Notificações",
    "Atalhos do teclado",
    "Idioma",
    "Modo streamer",
    "Avançado"
  ]}
];

export function UserSettingsModal({ isOpen, onClose }: UserSettingsModalProps) {
  const [selectedItem, setSelectedItem] = useState("Minha conta");
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-discord-dark rounded-lg w-[90vw] h-[90vh] max-w-6xl flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-72 bg-discord-sidebar p-4 overflow-y-auto">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-discord-text-muted" size={16} />
              <input
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-discord-darkest text-discord-text-primary placeholder-discord-text-muted rounded pl-10 pr-4 py-2 text-sm focus:outline-none"
              />
            </div>
          </div>

          {settingsMenuItems.map((section) => (
            <div key={section.category} className="mb-6">
              <h3 className="text-discord-text-muted text-xs font-semibold mb-2 uppercase">
                {section.category}
              </h3>
              {section.items
                .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedItem(item)}
                  className={`w-full text-left px-3 py-2 rounded text-sm mb-1 transition-colors ${
                    selectedItem === item
                      ? "bg-discord-hover text-white"
                      : "text-discord-text-secondary hover:bg-discord-hover hover:text-discord-text-primary"
                  }`}
                >
                  {item}
                  {item === "Nitro" && (
                    <span className="ml-2 w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-white text-2xl font-semibold">{selectedItem}</h1>
            <button
              onClick={onClose}
              className="text-discord-text-muted hover:text-white p-2 rounded transition-colors"
            >
              <X size={24} />
              <span className="ml-2 text-sm">ESC</span>
            </button>
          </div>

          {selectedItem === "Minha conta" && (
            <div>
              <div className="flex space-x-4 mb-6 border-b border-discord-hover">
                <button className="text-discord-blurple border-b-2 border-discord-blurple pb-2 px-1">
                  Segurança
                </button>
                <button className="text-discord-text-muted hover:text-discord-text-primary pb-2 px-1">
                  Status
                </button>
              </div>

              <div className="bg-discord-darkest rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 bg-discord-blurple rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                      C
                    </div>
                    <div>
                      <h2 className="text-white text-xl font-semibold">Chico</h2>
                      <div className="flex space-x-2 mt-2">
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-discord-blurple text-white px-4 py-2 rounded text-sm font-medium hover:bg-discord-blurple/90">
                    Editar perfil do usuário
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-discord-text-primary font-medium">Nome Exibido</div>
                      <div className="text-discord-text-muted text-sm">Chico</div>
                    </div>
                    <button className="text-discord-text-muted hover:text-white text-sm">
                      Editar
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-discord-text-primary font-medium">Nome De Usuário</div>
                      <div className="text-discord-text-muted text-sm">etamus</div>
                    </div>
                    <button className="text-discord-text-muted hover:text-white text-sm">
                      Editar
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-discord-text-primary font-medium">E-Mail</div>
                      <div className="text-discord-text-muted text-sm">••••••••••••@gmail.com</div>
                    </div>
                    <button className="text-discord-text-muted hover:text-white text-sm">
                      Editar
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-discord-text-primary font-medium">Telefone</div>
                      <div className="text-discord-text-muted text-sm">••••••••••2526</div>
                    </div>
                    <div className="space-x-2">
                      <button className="text-discord-text-muted hover:text-white text-sm">
                        Remover
                      </button>
                      <button className="text-discord-text-muted hover:text-white text-sm">
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-white text-lg font-semibold mb-4">Senha e autenticação</h3>
                <button className="bg-discord-blurple text-white px-4 py-2 rounded text-sm font-medium hover:bg-discord-blurple/90">
                  Mudar senha
                </button>
                
                <div className="mt-6 bg-discord-darkest rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Aplicativo De Autenticação</h4>
                  <p className="text-discord-text-muted text-sm mb-4">
                    Proteja sua conta do Discord com uma camada extra de segurança. Uma vez configurado, será necessário inserir sua senha e completar uma etapa adicional para poder entrar.
                  </p>
                  <div className="w-full bg-discord-blurple h-1 rounded"></div>
                </div>
              </div>
            </div>
          )}

          {selectedItem !== "Minha conta" && (
            <div className="text-center py-16">
              <div className="text-discord-text-secondary mb-4">
                Configurações para "{selectedItem}"
              </div>
              <div className="text-discord-text-muted text-sm">
                Esta seção ainda não foi implementada.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
