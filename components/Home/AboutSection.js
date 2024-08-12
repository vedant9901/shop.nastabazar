import classes from './AboutSection.module.css'

const AboutSection = ({ data, locale }) => {

  return (
    <div className="px-4 py-8 bg-gray-100">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">About Nasta Bazar</h2>
        
        {/* Section 1 */}
        <div className="mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
                Nasta Bazar, Ahmedabad's first-of-its-kind snacking store, created for those who relish tasty bites at any time of the day. We offer a diverse range of traditional Indian snacks such as Khakhra, Ganthiya, Sev, Chavana, Bhakharvadi, Wafers, Roasted snacks, and Mukhvas, alongside gourmet delights like Chips, Dips, Sauces, and premium Dry Fruits. But that’s just the beginning.
            </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
                At Nasta Bazar, we go beyond the ordinary, bringing you an assortment of Dairy products like Butter, Cheese, and Paneer, as well as a variety of Healthy and Diet foods for the health-conscious. Our Bakery section is stocked with freshly baked cookies, biscuits, Khari, and toast, perfect for any time snacking. And for those with a sweet tooth, our collection of Chocolates and Ice creams won’t disappoint.
            </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
                To complete your snacking experience, we also offer a curated selection of Indian and international Beverages. Whether you’re a kid, an adult, or a veteran snack lover, Nasta Bazar has something to satisfy every craving. Visit us today and explore a world of flavors where quality meets variety, making snacking a delightful experience any time of the day or night.
            </p>
        </div>
    </div>
</div>
  )
}

export default AboutSection