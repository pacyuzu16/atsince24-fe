
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Cta() {
    return (
        <section className="py-16 bg-brand-blue text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">The art of Simple Life</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
                    At @since24, we believe that technology should simplify your life, not complicate it. Our premium electronic
                    appliances and installations are designed with this philosophy in mind.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild className="bg-white text-brand-blue hover:bg-gray-100">
                        <Link href="/products">Explore Products</Link>
                    </Button>
                    <Button asChild variant="outline" className="text-[#08529c] border-white hover:bg-white/10">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

