import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_lib/action';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className='p-2 md:py-3 md:px-5 hover:bg-primary-900 text-sm hover:text-primary-100 transition-colors flex items-center gap-2 md:gap-4 font-semibold text-primary-200 w-full'>
        <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
