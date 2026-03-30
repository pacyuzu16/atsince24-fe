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
    client: "Ngirimana",
    description:
      "Installation of a Solar Water Heater system for a family home, providing hot water for a household while reducing energy costs.",
    date: "February 2024",
    location: "Nyamirambo",
    images: {
      before: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194473/%40since24/ivo1hwfgvi0n64nnsuny.png",
      after: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194470/%40since24/p85b2odbcozfynoqesem.png",
    },
    services: ["Solar Water Heater Installation"],
  },
  {
    id: "solar-installation",
    title: "Solar Water Heater Installation",
    client: "Christophe",
    description:
      "Installation of a Solar Water Heater system for a family home.",
    date: "March 2024",
    location: "Masaka",
    images: {
      before: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751191735/%40since24/pibi3vyeonjtz0krw4rw.png",
      after: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194453/%40since24/eveaw0tofdzg9lhbywfu.png",
    },
    services: ["Solar Water Heater Installation"],
  },
  {
    id: "gate-automation-commercial",
    title: "Automatic Gate Opener",
    client: "Uwimbabazi",
    description:
      "Implementation of an automated gate system with access control , enhancing security and streamlining entry.",
    date: "2024",
    location: "Kimironko",
    images: {
      before: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751191714/%40since24/jpkfasuwqiyzd4cxjmbq.png",
      after: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751191730/%40since24/txtj1pncuc6p4fso9xce.png",
    },
    services: ["Automatic Gate Installation", "Access Control System"],
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
                          className="object-contain w-full h-full bg-[#134fbf]/40"
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
                        className="object-contain w-full h-full bg-[#134fbf]/40"
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
