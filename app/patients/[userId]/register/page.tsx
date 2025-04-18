import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      {/* left side appointment form */}
      <section className="flex flex-1 items-center justify-center px-12">
        <div className="w-full max-w-xl">
          <Image
            src="/assets/iCare.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-20 w-32 mx-auto"
          />
          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between px-2">
            <p className="text-dark-600">2025 iCare</p>
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
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
