import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-6 text-foreground">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Ready to take your business to the next level? Get in touch with our expert team today.
                        </p>

                        <div className="space-y-8 mt-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Visit Us</h3>
                                    <p className="text-muted-foreground">
                                        38 Glenbarry Road,<br />
                                        Campbellfield, VIC 306
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Call Us</h3>
                                    <p className="text-muted-foreground">
                                        (03) 8592 1924
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Mon-Fri 9am - 5pm
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">
                                        info@accountsbridge.com.au
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Decorative blob behind form */}
                        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-3xl blur-2xl" />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
