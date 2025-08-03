import SideNavigation from '../_components/SideNavigation';

export default function Layout({ children }) {
  return (
    <div className='grid grid-cols-[8rem_1fr] md:grid-cols-[16rem_1fr] h-full  gap-4 md:gap-12'>
      <SideNavigation />
      <div className='py-1'>{children}</div>
    </div>
  );
}
