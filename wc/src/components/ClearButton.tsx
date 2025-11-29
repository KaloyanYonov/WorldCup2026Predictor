type ClearButtonProps = {
  onClear: () => void;
};

export default function ClearButton({ onClear }: ClearButtonProps) {
  return (
    <button 
      onClick={onClear}
      className="px-6 py-2 bg-red-600 text-white font-semibold rounded shadow hover:bg-red-700 transition"
    >
      Clear Picks
    </button>
  );
}
