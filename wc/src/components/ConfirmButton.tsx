
type ConfirmButtonProps = {
    onConfirm : () => void;
}


export default function ConfirmButton({onConfirm} : ConfirmButtonProps) {
    return(
        <button
        onClick={onConfirm}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
        Confirm
    </button>
    )
    
}