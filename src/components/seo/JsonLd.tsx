export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        "name": "Accounts Bridge",
        "image": "https://accountsbridge.com.au/logo.png",
        "description": "Expert accounting, taxation, and advisory for innovative SMEs.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "38 Glenbarry Road",
            "addressLocality": "Campbellfield",
            "addressRegion": "VIC",
            "postalCode": "306",
            "addressCountry": "AU"
        },
        "telephone": "(03) 8592 1924",
        "openingHours": "Mo-Fr 09:00-17:00",
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
