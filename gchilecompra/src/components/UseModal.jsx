import { useState } from 'react';

// HOOKS
export const UseModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // HOOK PERSONALIZADO
    return [isOpen, openModal, closeModal]    ;
};

export default UseModal;