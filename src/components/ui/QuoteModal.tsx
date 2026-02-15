"use client";

import { Modal } from "@/components/ui/Modal";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { useModal } from "@/context/ModalContext";

export function QuoteModal() {
    const { isQuoteOpenn, closeQuote } = useModal();

    return (
        <Modal isOpen={isQuoteOpenn} onClose={closeQuote} title="Request a Quote">
            <QuoteForm onSuccess={closeQuote} />
        </Modal>
    );
}
