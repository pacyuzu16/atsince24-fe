import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NotifyButton } from "@/components/notify-button"

interface ProductVariant {
  id: string
  name: string
  capacity?: string
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
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751191716/%40since24/ln7pbfnsqzlnz1kvxhyp.jpg",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194453/%40since24/t2yxljxcfnyo1zrjucde.png",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751752837/%40since24/lwymqmaapzrjiyvmvzi5.webp",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751752921/%40since24/okd2m1r8cqnukyccoinm.jpg",
    ],
    specs: {
      "Energy Source": "Solar",
      Material: "Stainless Steel",
      "Capacity Options": "150L, 200L, 300L",
      "Intelligent Controller": "Yes",
      "Electric Backup": "1.5kW Electric Resistance",
      "Temperature Display": "Water Level and Current Temperature",
      "Solenoid Valve": "Included",
      Warranty: "3 Years",
    },
    useCases: ["Residential homes", "Small businesses", "Hotels and guesthouses", "Eco-friendly buildings"],
    installationIncluded: true,
    variants: [
      {
        id: "pressurized",
        name: "Pressurized Solar Water Heater",
        features: [
          "Suitable for cold climates",
          "Works with varying water pressure",
          "Freeze protection",
          "Digital temperature control",
        ],
      },
      {
        id: "non-pressurized",
        name: "Non-Pressurized Solar Water Heater",
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
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194482/%40since24/naddpdl4fqyt80zrhx6f.png",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751748451/%40since24/ldo82fhudpd5kegi6ffy.png",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751200214/%40since24/mvcomqc5ife4jp6yt4eo.jpg",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751193054/%40since24/phft2gzekut3jtjxa9cm.jpg",
    ],
    specs: {
      "Weather Resistance": "Yes",
      "Body Material": "Stainless Steel",
      "Power Supply": "220V AC, 130W",
      "Remote Control": "Included",
      "Smart Control": "Bluetooth and WiFi",
      "Safety Sensor": "Beam Photocell Sensor",
      "Complete Kit Includes": "Motor with Control Panel, 2 Remote Controls, 2 Manual Override Keys, Mounting Base Plate, Instruction Manual, 4m Gear Racks",
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
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751752254/%40since24/klcsrtbwuy6ukoi0v8wj.png",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224062/%40since24/qgpcjltuwjmhk4nrm56p.jpg",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751192867/%40since24/gvnhkb7gdhatc4fjoqrh.jpg",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751756120/%40since24/hkf1utp8qho3ftrmlcb6.jpg",
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
    variants: [
      {
        id: "standard-barrier",
        name: "Standard Barrier",
        features: ["Fast operation", "Durable construction", "Safety sensors", "Manual override option"],
      },
      {
        id: "premium-barrier",
        name: "Premium Barrier",
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
    ],
    motivationalBanner: "❄️ Stay Cool and Comfortable Year-Round with Our Energy-Efficient Air Conditioners!",
    images: [
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751193179/%40since24/qoisxsvje4vcjnfvejkv.jpg",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224403/%40since24/tyhxh3xfrmurxb7rexhz.webp",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751756655/%40since24/duoezg2ferox72zf7pq3.jpg",
      "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751756655/%40since24/zms0pgxofaljqjz42szf.webp",
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
    variants: [
      {
        id: "standard-ac",
        name: "Standard Air Conditioner",
        capacity: "1 Ton",
        features: ["Energy efficient", "Low noise operation", "Remote control", "Timer function"],
      },
      {
        id: "premium-ac",
        name: "Premium Air Conditioner",
        capacity: "1.5 Ton",
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
    const message = `Hello, I'm interested in the ${productName}${variantName ? ` (${variantName})` : ""
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

              {/* Why Choose This Product Section - Moved under images */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-medium text-brand-dark mb-4 text-center">Why Choose {product.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.whyChoose.map((reason, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="bg-brand-blue/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <Star className="h-3 w-3 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-brand-dark">{reason.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
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

          {product.variants && (
            <div className="mt-12">
              <h2 className="text-2xl font-medium text-brand-dark mb-8 text-center">Available Variants</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.variants.map((variant) => (
                    <div key={variant.id} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-brand-dark mb-2">{variant.name}</h3>
                        {variant.capacity && (
                          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                            {variant.capacity}
                          </div>
                        )}
                      </div>

                      <div className="space-y-4 mb-8">
                        {variant.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors py-3"
                        asChild
                      >
                        <a
                          href={createWhatsAppMessage(product.name, variant.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <svg className="mr-2 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          Inquire About This Variant/Product
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
