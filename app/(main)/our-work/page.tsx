import Image from "next/image"
import { CalendarIcon, MapPin } from "lucide-react"

interface Project {
  id: string
  title: string
  client: string
  description: string
  date: string
  location: string
  images: {
    before?: string
    after: string
  }
  services: string[]
}

const projects: Project[] = [
  {
    id: "solar-installation-residence",
    title: "Solar Water Heater Installation",
    client: "Johnson Residence",
    description:
      "Installation of a 200L Pressurized Solar Water Heater system for a family home, providing hot water for a household of four while reducing energy costs.",
    date: "March 2023",
    location: "Westview Heights, CA",
    images: {
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
    services: ["Solar Water Heater Installation", "Plumbing Integration", "System Configuration"],
  },
  {
    id: "gate-automation-commercial",
    title: "Commercial Gate Automation",
    client: "Skyline Office Complex",
    description:
      "Implementation of an automated gate system with access control for a busy office complex, enhancing security and streamlining entry for employees and visitors.",
    date: "November 2022",
    location: "Downtown Metro, NY",
    images: {
      before: "/placeholder.svg?height=400&width=600",
      after: "/placeholder.svg?height=400&width=600",
    },
    services: ["Automatic Gate Installation", "Access Control System", "Remote Management Setup"],
  },
  {
    id: "multi-unit-solar",
    title: "Multi-Unit Solar Heating Solution",
    client: "Sunrise Apartments",
    description:
      "Design and installation of a comprehensive solar water heating system for a 24-unit apartment building, providing efficient hot water while significantly reducing utility costs.",
    date: "July 2023",
    location: "Bayside, FL",
    images: {
      after: "/placeholder.svg?height=400&width=600",
    },
    services: ["System Design", "Solar Water Heater Installation", "Building Integration", "Maintenance Plan"],
  },
]

export default function OurWorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-[#08519c] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Our Work</h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Explore our portfolio of completed projects and installations. Each project showcases our commitment to
            quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-medium text-brand-dark mb-2">{project.title}</h2>
                  <p className="text-brand-blue mb-6">Client: {project.client}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {project.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-brand-dark mb-3">Services Provided</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span key={index} className="bg-gray-100 text-brand-dark text-xs px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`grid ${project.images.before ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-4 p-8 pt-0`}
                >
                  {project.images.before && (
                    <div>
                      <p className="text-gray-600 text-sm mb-2">Before</p>
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={project.images.before || "/placeholder.svg"}
                          alt={`${project.title} - Before`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600 text-sm mb-2">After</p>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={project.images.after || "/placeholder.svg"}
                        alt={`${project.title} - After`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
