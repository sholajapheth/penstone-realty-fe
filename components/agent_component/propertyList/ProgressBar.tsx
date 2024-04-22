
interface ProgressBarProps {
  progress: number; // Progress value (0 to 100)
  label?: string; // Optional label to display
  className?: string; // Optional custom CSS class
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label, className }) => {
  // ... component logic
  return (
    <div className={`bg-gray-200 rounded-[4px] h-[24px] overflow-hidden ${className}`}>
      <div
        className={`bg-secondary h-full rounded-[4px] transition-all duration-300 ease-linear`}
        style={{ width: `${progress}%` }}
      ></div>
      {label && <span className="ml-2 text-sm">{label}</span>}
    </div>
  );
};

export default ProgressBar;