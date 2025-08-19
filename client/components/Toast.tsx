import { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  message: string;
  duration?: number;
}

interface ToastProps {
  toast: ToastMessage;
  onRemove: (id: string) => void;
}

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const colorMap = {
  success: "border-discord-green bg-discord-green/10",
  error: "border-discord-red bg-discord-red/10", 
  info: "border-discord-blurple bg-discord-blurple/10",
};

function Toast({ toast, onRemove }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const Icon = iconMap[toast.type];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration || 3000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  return (
    <div className={`transform transition-all duration-300 ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}>
      <div className={`bg-discord-darkest border rounded-lg p-4 shadow-lg min-w-80 ${colorMap[toast.type]}`}>
        <div className="flex items-start">
          <Icon className={`mt-0.5 mr-3 flex-shrink-0 ${
            toast.type === "success" ? "text-discord-green" :
            toast.type === "error" ? "text-discord-red" : "text-discord-blurple"
          }`} size={20} />
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium text-sm">{toast.title}</div>
            <div className="text-discord-text-muted text-sm mt-1">{toast.message}</div>
          </div>
          <button
            onClick={() => onRemove(toast.id)}
            className="ml-3 text-discord-text-muted hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (toast: Omit<ToastMessage, "id">) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return { toasts, addToast, removeToast };
}
