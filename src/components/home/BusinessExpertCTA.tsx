"use client";



export function BusinessExpertCTA() {
    return (
        <section className="w-full bg-secondary py-12">
            <div className="max-w-8xl mx-auto px-6 md:px-12">


                {/* Statistics Section */}
                <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Background effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 relative z-10">
                        {[
                            { value: "1,500+", label: "Active Business Clients" },
                            { value: "25+", label: "Accounting Professionals" },
                            { value: "100%", label: "Deliverable Completion Rate" },
                            { value: "$1M+", label: "Minimum Client Revenue Focus" },
                            { value: "400+", label: "Active WhatsApp Groups" }
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center space-y-2 lg:border-r lg:last:border-r-0 border-white/10 px-4">
                                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="text-sm md:text-base font-medium text-white/80 max-w-[150px] leading-snug">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}