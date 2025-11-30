type CancelButtonProps = {
    onCancel: () => void;
};

export default function CancelButton({ onCancel }: CancelButtonProps) {
    return(
        <button
        onClick={onCancel}
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
    >
        Cancel
    </button>
    )
    
}