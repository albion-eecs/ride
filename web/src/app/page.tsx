"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <Header />
      
      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              AlbionRide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Safe, reliable rides for Albion students. Find or offer rides to campus, home, or anywhere else.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/posts">
                <Button size="lg">Find a Ride</Button>
              </Link>
              <Link href="/posts/new">
                <Button size="lg" variant="outline">Offer a Ride</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why AlbionRide?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Student Verified</h3>
                <p className="text-muted-foreground">
                  All users are verified Albion students
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Simple</h3>
                <p className="text-muted-foreground">
                  Easy posting and booking system
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  Built by students, for students
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
