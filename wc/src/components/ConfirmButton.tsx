type ConfirmButtonProps = {
    onConfirm: () => void;
    disabled?: boolean;
}

export default function ConfirmButton({ onConfirm, disabled }: ConfirmButtonProps) {
    return (
        <button
            onClick={onConfirm}
            disabled={disabled}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
            Confirm
        </button>
    );
}
