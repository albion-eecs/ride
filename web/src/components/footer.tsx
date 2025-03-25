import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-purple-700/70 relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat bg-[size:180px] opacity-[0.035] dark:opacity-[0.015] pointer-events-none"></div>
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/safety" className="hover:text-foreground">Safety Guidelines</Link></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/report" className="hover:text-foreground">Report an Issue</Link></li>
              <li><Link href="/feedback" className="hover:text-foreground">Feedback</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AlbionRide | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 