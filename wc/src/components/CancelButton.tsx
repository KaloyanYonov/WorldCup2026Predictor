type CancelButtonProps = {
    onCancel: () => void;
};

export default function CancelButton({ onCancel }: CancelButtonProps) {
    return(
        <button
        onClick={onCancel}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
    >
        Cancel
    </button>
    )
    
}