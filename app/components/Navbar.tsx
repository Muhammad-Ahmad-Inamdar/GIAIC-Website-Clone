import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-blue-700 flex h-20 w-full ">
      <div className="flex h-20 w-full items-center justify-around px-6">
        <div className="h-12 w-12 object-cover mr-4 -ml-8">
          <Image src="/logo.png" alt="Logo" width={90} height={150} />
        </div>
        <div className="text-2xl font-bold text-blue-200 -ml-32">
          Tuition Free Education Program on Latest Technologies
        </div>
        <div className="flex space-x-10 text-white">
          <div>Home</div>
          <div>Apply</div>
          <div>Jobs</div>
          <div>Result</div>
          <div>Courses</div>
        </div>
      </div>
    </header>
  );
}
