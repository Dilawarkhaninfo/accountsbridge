import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12">
            <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Accounts Bridge</h3>
                    <p className="text-sm text-muted-foreground">
                        Strategic finance partners for growing businesses.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/services/business">Business Advisory</Link></li>
                        <li><Link href="/services/tax">Taxation</Link></li>
                        <li><Link href="/services/financial">Financial Planning</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact-us">Contact</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-semibold mb-4">Contact</h4>
                    <p className="text-sm text-muted-foreground">
                        38 Glenbarry Road,<br />
                        Campbellfield, VIC 306
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        (03) 8592 1924
                    </p>
                </div>
            </div>
            <div className="container mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Accounts Bridge. All rights reserved.
            </div>
        </footer>
    );
}
