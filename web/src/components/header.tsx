import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { SignInDialog } from "@/components/auth/sign-in-dialog";
import { SignUpDialog } from "@/components/auth/sign-up-dialog";
import { useState } from "react";

export function Header() {
  const { data: session } = authClient.useSession();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="AlbionRide" width={32} height={32} />
            <span className="text-xl font-bold hidden sm:inline">AlbionRide</span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            {session ? (
              <>
                <Link href="/posts">
                  <Button variant="ghost">Posts</Button>
                </Link>
                <Button variant="outline" onClick={() => authClient.signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => setShowSignIn(true)}>
                  Sign In
                </Button>
                <Button onClick={() => setShowSignUp(true)}>
                  Sign Up
                </Button>
              </>
            )}
          </nav>
        </div>
      </header>
      <SignInDialog 
        open={showSignIn} 
        onOpenChange={setShowSignIn}
      />
      <SignUpDialog 
        open={showSignUp} 
        onOpenChange={setShowSignUp}
      />
    </>
  );
} 