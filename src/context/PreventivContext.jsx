import { createContext, useCallback, useContext, useState } from 'react';
import PreventivModal from '../components/PreventivModal.jsx';

const PreventivContext = createContext(null);

export function PreventivProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const openPreventiv = useCallback((id) => {
    setCategoryId(id ?? null);
    setIsOpen(true);
  }, []);

  const closePreventiv = useCallback(() => setIsOpen(false), []);

  return (
    <PreventivContext.Provider value={{ openPreventiv, closePreventiv, isOpen }}>
      {children}
      <PreventivModal
        isOpen={isOpen}
        initialCategoryId={categoryId}
        onClose={closePreventiv}
      />
    </PreventivContext.Provider>
  );
}

export function usePreventiv() {
  const ctx = useContext(PreventivContext);
  if (!ctx) throw new Error('usePreventiv must be used inside PreventivProvider');
  return ctx;
}
