export default function DotBackground() {
  return (
    <div
      className="absolute inset-0 -z-20 opacity-60"
      style={{
        backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  );
}