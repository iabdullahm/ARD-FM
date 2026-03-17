import { LoginClient } from './client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-background">
        <div className="absolute top-4 left-4 z-10 md:top-6 md:left-6">
             <Link href="/" passHref>
                 <Button variant="ghost">
                     <ArrowLeft className="mr-2 h-4 w-4" />
                     Back to Home
                 </Button>
             </Link>
        </div>
      <LoginClient />
    </div>
  );
}
