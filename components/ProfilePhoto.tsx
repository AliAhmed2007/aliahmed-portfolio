import Image from "next/image";

function ProfilePhoto() {
  return (
    <div className="relative flex items-center justify-center mb-10 mt-[-35px]">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 blur-md opacity-60 animate-pulse scale-110" />

      {/* Spinning dashed border ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/40 scale-110 animate-spin"
        style={{ animationDuration: "10s" }}
      />

      {/* Static decorative ring */}
      <div className="absolute inset-0 rounded-full border border-white/10 scale-105" />

      {/* Image container */}
      <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
        <Image
          src="/profile-photo.webp"
          alt="Ali Ahmed - Profile Photo"
          width={160}
          height={160}
          quality={90}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-2 border-black-100"
          priority
        />
      </div>
    </div>
  );
}

export default ProfilePhoto;
