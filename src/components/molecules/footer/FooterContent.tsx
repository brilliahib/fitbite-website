import Image from "next/image";
import Link from "next/link";

export default function FooterContent() {
  return (
    <footer className="pad-x-xl bg-[#1f4f47] py-20 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <Image
            src={"/images/logo/logo-white.png"}
            alt="Fitbite Logo"
            width={50}
            height={50}
          />
          <div className="space-y-3">
            <h1 className="text-xl font-semibold">Fitbite</h1>
            <p>
              Aplikasi website untuk membantu kamu mengatur pola makan dan
              mencapai tujuan kesehatanmu.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Links</h1>
            <div className="flex flex-col gap-4">
              <Link href="#">About</Link>
              <Link href="#">Features</Link>
              <Link href="#">Testimonial</Link>
              <Link href="#">FAQ</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Features</h1>
            <div className="flex flex-col gap-4">
              <p>Scan Makanan</p>
              <p>Meal Plan</p>
              <p>Kalori Harian</p>
              <p>Progress Mingguan</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Contact</h1>
            <div className="flex flex-col gap-4">
              <p>support@fitbite.id</p>
              <p>+62 812-3456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
