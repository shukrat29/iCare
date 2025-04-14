import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen">
      {/* left side */}
      <section className="romove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              2025 iCare
            </p>
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
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
