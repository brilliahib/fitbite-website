import Image from "next/image";
import Link from "next/link";

export default function NavL() {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src={"/images/logo/logo.png"}
                alt="Fitbite"
                width={25}
                height={25}
              />
            </div>
            <h1 className="font-bold">Fitbite</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
