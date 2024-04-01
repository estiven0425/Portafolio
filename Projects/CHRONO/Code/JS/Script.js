// ---------- Localizadores ---------- //
const FeaturedProductsSection = document.getElementById('FeaturedProductsSectionMain');
const LeftButtonFeatured = document.getElementById('LeftFeaturedProductsSectionMain');
const RightButtonFeatured = document.getElementById('RightFeaturedProductsSectionMain');
const TestimonialsSection = document.getElementById('BottomTestimonialsSectionMain');
const LeftButtonTestimonials = document.getElementById('LeftButtonBottomTestimonialsSectionMain');
const RightButtonTestimonials = document.getElementById('RightButtonBottomTestimonialsSectionMain');
// ---------- Slider featured ---------- //
LeftButtonFeatured.addEventListener('click', function () {
    FeaturedProductsSection.scrollLeft -= 450;
});
RightButtonFeatured.addEventListener('click', function () {
    FeaturedProductsSection.scrollLeft += 450;
});
// ---------- Slider testimonials ---------- //
LeftButtonTestimonials.addEventListener('click', function () {
    TestimonialsSection.scrollLeft -= 1500;
});
RightButtonTestimonials.addEventListener('click', function () {
    TestimonialsSection.scrollLeft += 1500;
});
