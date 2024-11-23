import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 py-16 max-h-screen font-[family-name:var(--font-geist-sans)] overflow-y-hidden antialiased">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
          <h1 className="text-5xl font-extrabold text-center">Dylan Yates</h1>
          <p className="text-xl font-normal text-center h-0">💻 Software Engineer 🧪</p>
          <p className="text-xl font-normal text-center h-0">🤠 Zookeeper 🐶😺</p>
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              className="max-w-max"
              alt="Norman"
              src="/dylan-avatar.png"
              width="512"
              height="512"
            />
            <Link
              title="Learn More"
              href="about"
              className="block bg-cyan-800 text-white hover:bg-cyan-900 p-3 min-w-48 shadow-sm mt-2 rounded-lg font-extrabold uppercase"
            >
                Learn More
            </Link>
          </div>
          <h2 className="text-xl font-normal text-center">Featuring <strong>The Animals</strong></h2>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="sm:max-w-[100%] md:max-w-max"
            alt="Norman"
            src="/theanimals.png"
            width="1418"
            height="1080"
          />
        </div>
      </main>
    </div>
  );
}
