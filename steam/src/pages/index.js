import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/prism.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <main className="text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Welcome
          </h1>
          <p className="mt-4 text-xl text-white drop-shadow-md">
            Your website content goes here
          </p>
        </main>
      </div>
    </div>
  );
}