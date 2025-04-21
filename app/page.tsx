import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen flex-col md:flex-row p-4 md:p-6 overflow-auto">
      {/* left side appointment form */}
      <section className="flex flex-1 items-center justify-center px-4 md:px-12">
        <div className="w-full max-w-xl">
          <Image
            src="/assets/iCare.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-10 h-16 w-28 md:h-20 md:w-32 mx-auto rounded-md"
          />
          <PatientForm />

          <div className="text-14-regular mt-10 md:mt-20 flex justify-between px-2 text-xs md:text-sm">
            <p className="text-dark-600">©2025 iCare</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      {/* right side doctor image (hidden on small screens) */}
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/assets/dc.png"
          height={1000}
          width={1000}
          alt="doctor"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Home;
