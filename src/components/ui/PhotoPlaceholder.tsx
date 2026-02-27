interface PhotoPlaceholderProps {
  width?: number;
  height?: number;
  label?: string;
  className?: string;
}

export function PhotoPlaceholder({
  width,
  height,
  label = "Photo coming soon",
  className = "",
}: PhotoPlaceholderProps) {
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div
      className={`bg-border flex items-center justify-center ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={label}
    >
      <div className="text-center px-6 py-8">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-7 h-7 text-muted"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <p className="font-inter text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}
