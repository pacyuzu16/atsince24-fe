import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Check, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotifyButton } from "@/components/notify-button"

interface ProductVariant {
  id: string
  name: string
  capacity?: string
  price: string
  features: string[]
}

interface WhyChooseReason {
  title: string
  description: string
}

interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  whyChoose: WhyChooseReason[]
  motivationalBanner: string
  images: string[]
  specs: {
    [key: string]: string
  }
  useCases: string[]
  installationIncluded: boolean
  variants?: ProductVariant[]
  comingSoon?: boolean
}

// Mock data for products
const products: { [key: string]: Product } = {
  "solar-water-heater": {
    id: "solar-water-heater",
    name: "Solar Water Heater",
    description: "Eco-friendly water heating solution with pressurized and non-pressurized options.",
    longDescription:
      "Our premium Solar Water Heaters harness the power of the sun to provide you with hot water while reducing your energy bills. Available in both pressurized and non-pressurized variants, these systems are designed for durability and efficiency in various climate conditions.",
    whyChoose: [
      {
        title: "Superior Efficiency in All Climates",
        description:
          "Our evacuated vacuum tube technology ensures optimal heat absorption, providing hot water even on cloudy days or in colder climates. The vacuum insulation minimizes heat loss, outperforming traditional flat plate collectors.",
      },
      {
        title: "Significant Energy Savings",
        description:
          "By utilizing solar energy, you can reduce your energy bills by up to 50%. The system's design ensures rapid heat transfer and high absorption efficiency, leading to lower utility costs.",
      },
      {
        title: "Environmentally Friendly",
        description:
          "SolarWaterHeater reduces reliance on fossil fuels, decreasing greenhouse gas emissions and contributing to a sustainable future.",
      },
      {
        title: "Durable and Low Maintenance",
        description:
          "Constructed with high-quality materials, our system boasts a lifespan of over 20 years. The design allows for easy replacement of individual tubes if necessary, ensuring long-term reliability.",
      },
      {
        title: "Easy Installation and Integration",
        description:
          "SolarWaterHeater can be seamlessly integrated into existing hot water systems, making the transition to solar energy straightforward and hassle-free.",
      },
    ],
    motivationalBanner:
      "🌞 Harness the Sun with Solar Water Heater: Efficient, Eco-Friendly, and Economical. Make the Switch Today!",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      "Energy Source": "Solar",
      Material: "Stainless Steel",
      Warranty: "5 Years",
      Lifespan: "15-20 Years",
      Installation: "Professional Installation Required",
      Maintenance: "Annual Inspection Recommended",
    },
    useCases: ["Residential homes", "Small businesses", "Hotels and guesthouses", "Eco-friendly buildings"],
    installationIncluded: true,
    variants: [
      {
        id: "pressurized-100l",
        name: "Pressurized Solar Water Heater",
        capacity: "100L",
        price: "RWF 750,000",
        features: [
          "Suitable for cold climates",
          "Works with varying water pressure",
          "Freeze protection",
          "Digital temperature control",
        ],
      },
      {
        id: "pressurized-200l",
        name: "Pressurized Solar Water Heater",
        capacity: "200L",
        price: "RWF 1,100,000",
        features: [
          "Suitable for cold climates",
          "Works with varying water pressure",
          "Freeze protection",
          "Digital temperature control",
        ],
      },
      {
        id: "non-pressurized-100l",
        name: "Non-Pressurized Solar Water Heater",
        capacity: "100L",
        price: "RWF 600,000",
        features: ["Ideal for warmer climates", "Simple installation", "Low maintenance", "Cost-effective solution"],
      },
      {
        id: "non-pressurized-200l",
        name: "Non-Pressurized Solar Water Heater",
        capacity: "200L",
        price: "RWF 850,000",
        features: ["Ideal for warmer climates", "Simple installation", "Low maintenance", "Cost-effective solution"],
      },
    ],
  },
  "automatic-gate-opener": {
    id: "automatic-gate-opener",
    name: "Automatic Gate Opener",
    description: "Smart gate solutions for enhanced security and convenience.",
    longDescription:
      "Our Automatic Gate Openers combine security with convenience, allowing you to control access to your property with ease. With remote control operation and optional smartphone integration, you can manage your gate from anywhere.",
    whyChoose: [
      {
        title: "Enhanced Security",
        description:
          "Our automatic gate openers provide an additional layer of security for your property, controlling who enters and exits.",
      },
      {
        title: "Convenience at Your Fingertips",
        description:
          "Open and close your gate with a remote control or smartphone app, without leaving your vehicle or home.",
      },
      {
        title: "Reliable Performance",
        description:
          "Built with high-quality components, our gate openers ensure smooth operation in all weather conditions.",
      },
      {
        title: "Smart Integration",
        description: "Connect your gate opener to your home automation system for seamless control and monitoring.",
      },
    ],
    motivationalBanner:
      "🔐 Upgrade Your Property with Automatic Gate Opener: Security, Convenience, and Peace of Mind in One Solution!",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      Power: "AC/DC with Battery Backup",
      Material: "Aluminum and Steel",
      Warranty: "3 Years",
      "Remote Range": "Up to 100m",
      "Gate Weight": "Up to 500kg",
      "Gate Width": "Up to 5m",
    },
    useCases: ["Residential driveways", "Commercial properties", "Industrial facilities", "Gated communities"],
    installationIncluded: true,
    variants: [
      {
        id: "standard",
        name: "Standard Gate Opener",
        price: "RWF 450,000",
        features: [
          "Remote control operation",
          "Battery backup",
          "Safety sensors",
          "Manual override in case of power failure",
        ],
      },
      {
        id: "premium",
        name: "Premium Gate Opener",
        price: "RWF 650,000",
        features: [
          "Smartphone control",
          "Voice assistant integration",
          "Advanced security features",
          "Extended warranty",
        ],
      },
    ],
  },
  "gate-barrier": {
    id: "gate-barrier",
    name: "Gate Barrier",
    description: "Advanced barrier systems for controlled access to your property.",
    longDescription:
      "Our Gate Barriers provide efficient traffic control for commercial and residential properties. With durable construction and reliable operation, these barriers ensure secure access management for your premises.",
    whyChoose: [
      {
        title: "Efficient Traffic Control",
        description: "Manage vehicle access to your property with precision and ease, reducing unauthorized entry.",
      },
      {
        title: "Rapid Operation",
        description: "Our barriers open and close in seconds, minimizing wait times while maintaining security.",
      },
      {
        title: "Durable Construction",
        description: "Built to withstand frequent use and harsh weather conditions, ensuring long-term reliability.",
      },
      {
        title: "Customizable Options",
        description: "Choose from various arm lengths and control systems to suit your specific requirements.",
      },
    ],
    motivationalBanner: "🚧 Control Access with Precision: Our Gate Barriers Provide Security Without Compromise!",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      Power: "AC with Battery Backup",
      Material: "Aluminum and Steel",
      Warranty: "2 Years",
      "Opening Time": "1-3 seconds",
      "Arm Length": "Up to 6m",
      "Operation Cycles": "5000 cycles per day",
    },
    useCases: ["Parking lots", "Toll booths", "Office complexes", "Residential communities"],
    installationIncluded: true,
    comingSoon: true,
    variants: [
      {
        id: "standard-barrier",
        name: "Standard Barrier",
        price: "RWF 650,000",
        features: ["Fast operation", "Durable construction", "Safety sensors", "Manual override option"],
      },
      {
        id: "premium-barrier",
        name: "Premium Barrier",
        price: "RWF 850,000",
        features: [
          "Advanced access control",
          "Integration with security systems",
          "Extended warranty",
          "Customizable arm length",
        ],
      },
    ],
  },
  "air-conditioner": {
    id: "air-conditioner",
    name: "Air Conditioner",
    description: "Energy-efficient cooling solutions for your home or office.",
    longDescription:
      "Our premium Air Conditioners provide efficient cooling while minimizing energy consumption. With smart features and elegant design, these units blend seamlessly into any interior while maintaining optimal comfort levels.",
    whyChoose: [
      {
        title: "Energy Efficiency",
        description:
          "Our air conditioners are designed to provide maximum cooling with minimal energy consumption, reducing your electricity bills.",
      },
      {
        title: "Quiet Operation",
        description:
          "Advanced technology ensures whisper-quiet operation, allowing you to enjoy a peaceful environment.",
      },
      {
        title: "Smart Features",
        description:
          "Control your air conditioner remotely via smartphone app, set schedules, and monitor energy usage.",
      },
      {
        title: "Air Purification",
        description:
          "Built-in filters remove dust, allergens, and bacteria, improving indoor air quality for better health.",
      },
      {
        title: "Elegant Design",
        description:
          "Sleek, modern units that complement any interior design while providing powerful cooling performance.",
      },
    ],
    motivationalBanner: "❄️ Stay Cool and Comfortable Year-Round with Our Energy-Efficient Air Conditioners!",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specs: {
      "Energy Rating": "5-Star",
      "Cooling Capacity": "1-2 Ton",
      Technology: "Inverter",
      Warranty: "5 Years on Compressor",
      "Noise Level": "Low",
      "Remote Control": "Yes, with Smart App Integration",
    },
    useCases: ["Residential rooms", "Office spaces", "Commercial establishments", "Server rooms"],
    installationIncluded: true,
    comingSoon: true,
    variants: [
      {
        id: "standard-ac",
        name: "Standard Air Conditioner",
        capacity: "1 Ton",
        price: "RWF 550,000",
        features: ["Energy efficient", "Low noise operation", "Remote control", "Timer function"],
      },
      {
        id: "premium-ac",
        name: "Premium Air Conditioner",
        capacity: "1.5 Ton",
        price: "RWF 750,000",
        features: ["Smart app control", "Voice assistant compatibility", "Air purification", "Sleep mode"],
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug]

  if (!product) {
    notFound()
  }

  // Function to create WhatsApp message with product details and website link
  const createWhatsAppMessage = (productName: string, variantName?: string) => {
    const productUrl = `https://since24.com/products/${params.slug}`
    const message = `Hello, I'm interested in the ${productName}${
      variantName ? ` (${variantName})` : ""
    }. Could you provide more information about pricing and availability? I found it on your website: ${productUrl}`
    return `https://wa.me/+250788825011?text=${encodeURIComponent(message)}`
  }

  return (
    <>
      <section className="pt-32 pb-8 bg-gradient-to-r from-blue-700 to-[#08519c] text-white">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">{product.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">{product.name}</h1>
          <p className="text-white/70 max-w-2xl mb-8">{product.description}</p>

          {product.comingSoon && (
            <div className="inline-block bg-brand-coral text-white text-sm font-medium px-3 py-1 rounded mb-8">
              Coming Soon
            </div>
          )}
        </div>
      </section>

      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-brand-blue/90 to-blue-600/90 py-4 text-white">
        <div className="container mx-auto text-center px-4">
          <p className="text-lg font-medium">{product.motivationalBanner}</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative aspect-square">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-medium text-brand-dark mb-4">About this Product</h2>
                <p className="text-gray-600 mb-6">{product.longDescription}</p>

                <h3 className="text-lg font-medium text-brand-dark mb-3">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded p-3">
                      <h4 className="text-gray-500 text-sm">{key}</h4>
                      <p className="text-brand-dark font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-medium text-brand-dark mb-3">Ideal For</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {product.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 text-brand-blue mr-2" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>

                {product.installationIncluded && (
                  <div className="bg-gray-50 rounded p-4 mb-6 border-l-4 border-brand-blue">
                    <h3 className="text-lg font-medium text-brand-dark mb-2">Professional Installation Included</h3>
                    <p className="text-gray-600 text-sm">
                      Our certified technicians will handle the complete installation process, ensuring your product
                      works perfectly from day one. Installation is included in the price.
                    </p>
                  </div>
                )}

                {product.comingSoon && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <NotifyButton productName={product.name} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Why Choose This Product Section */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-medium text-brand-dark mb-6 text-center">Why Choose {product.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.whyChoose.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-2 rounded-full mr-4">
                      <Star className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-brand-dark mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {product.variants && (
            <div className="mt-12">
              <h2 className="text-2xl font-medium text-brand-dark mb-6">Available Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.variants.map((variant) => (
                  <div key={variant.id} className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-medium text-brand-dark mb-2">{variant.name}</h3>
                    {variant.capacity && <p className="text-brand-blue font-medium mb-2">{variant.capacity}</p>}
                    <p className="text-brand-dark text-2xl font-bold mb-4">{variant.price}</p>
                    <ul className="space-y-2 mb-6">
                      {variant.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                      asChild
                    >
                      <a
                        href={createWhatsAppMessage(product.name, variant.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Inquire
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
