import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function SignupPage() {
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
      <Card className="w-full max-w-md mx-auto text-center glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>This feature is coming soon.</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-muted-foreground">The sign-up page is currently under construction. Please check back later or contact support for more information.</p>
          <Link href="/login" passHref>
            <Button className="mt-6 w-full">Go to Login</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
