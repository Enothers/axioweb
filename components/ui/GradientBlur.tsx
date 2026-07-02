export default function GradientBlur() {
  return (
    <>
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          -translate-x-1/2
          h-[850px]
          w-[1100px]
          rounded-full
          bg-[#7c3aed]/12
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[80px]
          -translate-x-1/2
          h-[500px]
          w-[700px]
          rounded-full
          bg-[#60a5fa]/8
          blur-[140px]
        "
      />
    </>
  );
}