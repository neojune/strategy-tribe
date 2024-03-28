import Link from 'next/link';

import { GoToLandingPage } from '@/lib/utils/Routes';

import { useAuth } from '@/auth/AuthContext';

import { Logo } from '../../utils/Logo';

export function LandingPageLink({ className }: { className?: string }) {
  const { isStaff, isAdmin, isAssociate, isDataDumpUser } = useAuth();
  return (
    <Link href={GoToLandingPage()}>
      <span className={`group flex shrink-0 items-center gap-2 ${className}`}>
        <Logo />
        <div className="text-left">
          <p className="label-lg text-on-surface-p0">StrategyTribe</p>
          <span className="label text-success">{isAdmin && 'Admin'}</span>
          <span className="label text-main">{isStaff && 'Staff'}</span>
          <span className="label text-waiting">
            {isAssociate && 'Associate'}
          </span>
          <span className="label text-waiting">
            {isDataDumpUser && 'Data Access'}
          </span>
        </div>
      </span>
    </Link>
  );
}
