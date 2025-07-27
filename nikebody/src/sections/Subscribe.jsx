import { Button } from "../components"
import { SectionAnimation } from "../components"

const Subscribe = () => {
  return (
    <SectionAnimation>
    <section 
    id="contact-us"
    className="max-container flex justify-between items-center 
    max-lg:flex-col gap-10 ">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col 
      gap-5 p-2.5 sm:border sm:border-text-gray rounded-full max-sm:items-center ">
        <input type="text" placeholder="subscribe@nike.com" className="input dark:bg-dark-primary" />
        <div className="flex max-sm:justify-end items-center">
          <Button label='Sign Up' fullWidth/>
        </div>

      </div>

    </section>
    </SectionAnimation>
  )
}

export default Subscribe