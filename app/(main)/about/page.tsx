import Image from "next/image"
import { Check, Linkedin, Mail } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  contact?: {
    email?: string
    linkedin?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: "john-smith",
    name: "John Smith",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in electronic engineering and product design, John founded @since24 with a vision to simplify everyday living through innovative technology.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "john@since24.com",
      linkedin: "https://linkedin.com/in/johnsmith",
    },
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "Sarah leads our R&D team, bringing her expertise in sustainable technology and energy-efficient systems to drive innovation in our product development.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "sarah@since24.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-[#08519c] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">About @since24</h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Learn about our journey, mission, and the values that drive us to deliver excellence in electronic
            appliances and installations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="@since24 Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light tracking-tight text-brand-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, @since24 was born from a vision to transform how people interact with electronic
                  appliances in their daily lives. We recognized that while technology was advancing rapidly, many
                  electronic solutions remained complicated, inefficient, and aesthetically unappealing.
                </p>
                <p>
                  Our founder, with over 15 years of experience in electronic engineering and design, assembled a team
                  of like-minded professionals who shared the passion for creating products that seamlessly blend into
                  modern lifestyles while delivering exceptional performance.
                </p>
                <p>
                  Today, @since24 stands as a testament to that vision, offering premium electronic appliances and
                  installation services that embody our philosophy: "The art of Simple Life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight text-brand-dark mb-6">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-brand-dark mb-4">Mission</h3>
              <p className="text-gray-600">
                To simplify everyday living through thoughtfully designed, energy-efficient electronic appliances and
                professional installation services that enhance comfort, convenience, and sustainability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-brand-dark mb-4">Vision</h3>
              <p className="text-gray-600">
                To be recognized globally as the leading provider of premium electronic solutions that transform living
                spaces and contribute to a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight text-brand-dark mb-6">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide every aspect of our business, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-medium text-brand-dark mb-4">Innovation</h3>
              <p className="text-gray-600 mb-4">
                We continuously explore new technologies and design approaches to create products that are ahead of the
                curve.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                  <span className="text-gray-600 text-sm">Research-driven development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                  <span className="text-gray-600 text-sm">Embracing emerging technologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-medium text-brand-dark mb-4">Quality</h3>
              <p className="text-gray-600 mb-4">
                We never compromise on the quality of our products, materials, or service delivery.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                  <span className="text-gray-600 text-sm">Rigorous testing protocols</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                  <span className="text-gray-600 text-sm">Premium materials and components</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-medium text-brand-dark mb-4">Sustainability</h3>
              <p className="text-gray-600 mb-4">
                We design products with energy efficiency and environmental impact in mind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                  <span className="text-gray-600 text-sm">Energy-efficient designs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-brand-blue mr-2 mt-1" />
                  <span className="text-gray-600 text-sm">Eco-friendly manufacturing processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight text-brand-dark mb-6">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals behind @since24. Our diverse team combines expertise, passion, and
              innovation to deliver exceptional products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-medium text-brand-dark mb-1">{member.name}</h2>
                  <p className="text-brand-blue mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  {member.contact && (
                    <div className="flex space-x-3">
                      {member.contact.email && (
                        <a
                          href={`mailto:${member.contact.email}`}
                          className="text-gray-500 hover:text-brand-blue transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                      {member.contact.linkedin && (
                        <a
                          href={member.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-brand-blue transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
