interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="text-lionzGold font-bold uppercase tracking-widest text-sm mb-2 block">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold leading-tight ${
          light ? "text-white" : "text-lionzNavy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
