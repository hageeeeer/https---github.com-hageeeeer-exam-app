export default function ProgressBarCom({ correct, total }) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const correctPercent = (correct / total) * 100;
  const correctOffset = circumference - (correctPercent / 100) * circumference;
  const wrongOffset = circumference - ((100 - correctPercent) / 100) * circumference;

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle cx="80" cy="80" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="12" />

      {/* الغلط - احمر */}
      <circle
        cx="80" cy="80" r={radius}
        fill="none"
        stroke="#ef4444"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={100-correctOffset}
        strokeLinecap="round"
        transform="rotate(-90 80 80)"
      />

      {/* الصح - اخضر */}
      <circle
        cx="80" cy="80" r={radius}
        fill="none"
        stroke="#22c55e"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={correctOffset}
        strokeLinecap="round"
        transform="rotate(-90 80 80)"
      />

    </svg>
  );
}