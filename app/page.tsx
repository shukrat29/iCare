import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen p-6">
      {/* left side appointment form */}
      <section className="flex flex-1 remove-scrollbar items-center justify-center px-12">
        <div className="w-full max-w-xl">
          <Image
            src="/assets/iCare.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-20 w-32 mx-auto rounded-md"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between px-2">
            <p className="text-dark-600">©2025 iCare</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      {/* right side doctor image */}
      <Image
        src="/assets/dc.png"
        height={1000}
        width={1000}
        alt="doctor"
        className="side-img max-w-[50%] object-cover rounded-md"
      />
    </div>
  );
};

export default Home;
