import { services } from "../constants"
import { ServiceCard } from "../components"
import { SectionAnimation } from "../components"

const Services = () => {
  return (
    <SectionAnimation>
   <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
    </SectionAnimation>
  )
}

export default Services