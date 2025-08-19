import { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Edit, Eye, LogOut, User } from "lucide-react";

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEditProfile: () => void;
  onChangeStatus: (status: string) => void;
  onSwitchAccount: () => void;
  currentStatus: string;
}

const statusOptions = [
  { id: "online", label: "Online", color: "bg-discord-green" },
  { id: "away", label: "Ausente", color: "bg-yellow-500" },
  { id: "busy", label: "Ocupado", color: "bg-red-500" },
  { id: "invisible", label: "Invisível", color: "bg-discord-text-muted" },
];

export function UserMenu({
  isOpen,
  onClose,
  onEditProfile,
  onChangeStatus,
  onSwitchAccount,
  currentStatus,
}: UserMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        ref={menuRef}
        className="absolute bottom-16 left-4 w-72 bg-discord-darkest rounded-lg shadow-lg border border-discord-hover overflow-hidden"
      >
        {/* Status Message */}
        <div className="p-4 border-b border-discord-hover">
          <div className="flex items-center mb-3">
            <div className="relative">
              <div className="w-12 h-12 bg-discord-blurple rounded-full flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-discord-darkest ${
                  statusOptions.find((s) => s.id === currentStatus)?.color ||
                  "bg-discord-green"
                }`}
              />
            </div>
            <div className="ml-3 flex-1">
              <div className="text-white font-semibold">Chico</div>
              <div className="text-discord-text-muted text-sm">
                etamus • Chiquinho
              </div>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span className="text-xs text-discord-text-muted">CODE</span>
              </div>
            </div>
          </div>

          <div className="bg-discord-hover rounded p-3">
            <div className="flex items-center text-discord-text-muted text-sm">
              <Edit size={14} className="mr-2" />
              <span className="italic">
                Escolha uma criatura mítica como um animal de estimação
              </span>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <button
            onClick={() => {
              onEditProfile();
              onClose();
            }}
            className="w-full flex items-center px-4 py-2 text-discord-text-primary hover:bg-discord-hover transition-colors"
          >
            <Edit size={16} className="mr-3" />
            Editar perfil
          </button>

          {/* Status Options */}
          <div className="px-4 py-2">
            <div className="text-discord-text-muted text-xs font-semibold mb-2">
              STATUS
            </div>
            {statusOptions.map((status) => (
              <button
                key={status.id}
                onClick={() => {
                  onChangeStatus(status.id);
                  onClose();
                }}
                className={`w-full flex items-center px-2 py-1.5 rounded text-sm transition-colors ${
                  currentStatus === status.id
                    ? "bg-discord-hover text-white"
                    : "text-discord-text-primary hover:bg-discord-hover"
                }`}
              >
                <div className={`w-3 h-3 rounded-full mr-3 ${status.color}`} />
                {status.label}
                {currentStatus === status.id && (
                  <div className="ml-auto w-1 h-1 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="border-t border-discord-hover my-2"></div>

          <button
            onClick={() => {
              onSwitchAccount();
              onClose();
            }}
            className="w-full flex items-center px-4 py-2 text-discord-text-primary hover:bg-discord-hover transition-colors"
          >
            <User size={16} className="mr-3" />
            Mudar de conta
            <MoreHorizontal size={16} className="ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}
