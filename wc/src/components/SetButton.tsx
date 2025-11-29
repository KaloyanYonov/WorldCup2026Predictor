type SetButtonProps = {
  onSet: () => void;
};

export default function SetButton({ onSet }: SetButtonProps) {
  return (
    <button 
      onClick={onSet}
      className="px-6 py-2 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition"
    >
      Save Picks
    </button>
  );
}
