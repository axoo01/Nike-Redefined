import { reviews } from "../constants"
import { ReviewCard } from "../components"
import { SectionAnimation } from "../components"
const CustomerReviews = () => {
  return (
    <SectionAnimation>
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers </span>Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their 
         exceptional expriences with us.
      </p>
      <div className="mt-[4rem] flex flex-1 justify-evenly items-center 
      max-lg:flex-col gap-10">
        {reviews.map(review =>(
          <ReviewCard 
          key={review.customerName} 
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}

          />
        ))}
      </div>
    </section>
    </SectionAnimation>
  )
}

export default CustomerReviews