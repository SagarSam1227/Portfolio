import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage((current) => (current === msg ? null : current));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#11151c] text-[#f3f4f6] border border-[#283244] shadow-2xl shadow-black/80 rounded-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="w-6 h-6 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
