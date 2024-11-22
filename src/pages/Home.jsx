import Accordion from "../components/Home/Accordion"
import Banner from "../components/Home/Banner"
import FeaturedProducts from "../components/Home/FeaturedProducts"
import UserReview from "../components/UserReview"


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <div className="my-8">
                    <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
                    <FeaturedProducts />
                </div>
                <div className="my-8">
                    <h1 className="mb-16 text-2xl font-semibold text-center">User Review</h1>
                    <UserReview />
                </div>
                <div className="my-8">
                    <h1 className="mb-16 text-2xl font-semibold text-center">Frequently Asked Question</h1>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Home
