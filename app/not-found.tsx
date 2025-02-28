import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/public/notFound.svg";
export default function NotFound() {
  return (
    <div className="h-[calc(100dvh-4rem)] flex items-center justify-center bg-white dark:bg-[#202936]">
      <div className="text-center">
        <Image
          alt="error"
          priority
          quality={100}
          width={500}
          height={500}
          className="mb-4"
          src={notFoundImage}
        />
        <h1 className="text-ld text-4xl mb-6">Opps!!!</h1>
        <h6 className="text-xl text-ld">
          This page you are looking for could not be found.
        </h6>
        <Link
          href="/"
          className="group relative flex items-stretch justify-center p-0.5 text-center font-medium bg-primary text-white rounded-lg w-fit mt-6 mx-auto"
        >
          <span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm">
            Go Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
