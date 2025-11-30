type ClearButtonProps = {
  onClear: () => void;
};

export default function ClearButton({ onClear }: ClearButtonProps) {
  return (
    <button 
      onClick={onClear}
      className="px-6 py-2 bg-gray-400 text-white font-semibold rounded shadow hover:bg-gray-500 transition"
    >
      Clear Picks
    </button>
  );
}
