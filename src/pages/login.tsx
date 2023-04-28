import {
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="flex items-center justify-between px-4 py-3.5 bg-white">
        <div className="flex items-center gap-0.5">
          <Bars3Icon className="h-8 w-8 text-main" />
          <Image src="/dumbbell.png" width={32} height={32} alt="Dumbbell" />
        </div>
        <div className="flex items-center gap-1.5">
          <ArrowLeftOnRectangleIcon className="h-8 w-8 text-main" />
          <p className="text-sm text-main">Login/Register</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
