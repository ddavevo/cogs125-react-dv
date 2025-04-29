import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Button } from '../../ui/button';
export const dynamic = 'force-static';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1>Hello world.</h1>
      <Button />
    </main>
  );
}
