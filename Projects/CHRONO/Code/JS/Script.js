// ---------- Localizadores ---------- //
const ShopListLeftNavBottomSectionHeader = document.getElementById('ShopListLeftNavBottomSectionHeader');
const AboutListLeftNavBottomSectionHeader = document.getElementById('AboutListLeftNavBottomSectionHeader');
const NewsListLeftNavBottomSectionHeader = document.getElementById('NewsListLeftNavBottomSectionHeader');
const ContactListLeftNavBottomSectionHeader = document.getElementById('ContactListLeftNavBottomSectionHeader');
const ButtonNextWelcomeSectionMain = document.getElementById('ButtonNextWelcomeSectionMain');
const ButtonProductWelcomeSectionMain = document.getElementById('ButtonProductWelcomeSectionMain');
const FeaturedProductsSectionMain = document.getElementById('FeaturedProductsSectionMain');
const LeftButtonFeaturedMain = document.getElementById('LeftFeaturedProductsSectionMain');
const RightButtonFeaturedMain = document.getElementById('RightFeaturedProductsSectionMain');
const TestimonialsSectionmMain = document.getElementById('BottomTestimonialsSectionMain');
const LeftButtonTestimonialsMain = document.getElementById('LeftButtonBottomTestimonialsSectionMain');
const RightButtonTestimonialsMain = document.getElementById('RightButtonBottomTestimonialsSectionMain');
const ButtonChildBottomFooterSection = document.getElementById('ButtonChildBottomFooterSection');
// ---------- Navegación ---------- //
ShopListLeftNavBottomSectionHeader.addEventListener('click', function () {
    document.getElementById('FeaturedProductsSectionMain').scrollIntoView({
        behavior: "smooth"
    });
});
AboutListLeftNavBottomSectionHeader.addEventListener('click', function () {
    document.getElementById('FeaturedAboutSectionMain').scrollIntoView({
        behavior: "smooth"
    });
});
NewsListLeftNavBottomSectionHeader.addEventListener('click', function () {
    document.getElementById('LatestNewsSectionMain').scrollIntoView({
        behavior: "smooth"
    });
});
ContactListLeftNavBottomSectionHeader.addEventListener('click', function () {
    document.getElementById('BottomFooterSection').scrollIntoView({
        behavior: "smooth"
    });
});
ButtonProductWelcomeSectionMain.addEventListener('click', function () {
    document.getElementById('FeaturedProductsSectionMain').scrollIntoView({
        behavior: "smooth"
    });
});
ButtonNextWelcomeSectionMain.addEventListener('click', function () {
    document.getElementById('FeaturedProductsSectionMain').scrollIntoView({
        behavior: "smooth"
    });
});
ButtonChildBottomFooterSection.addEventListener('click', function () {
    document.getElementById('BottomSectionHeader').scrollIntoView({
        behavior: "smooth"
    });
});
// ---------- Slider featured ---------- //
LeftButtonFeaturedMain.addEventListener('click', function () {
    let WindowWidthFeatured = window.innerWidth;
    let WindowScrollFeatured;
    switch (true) {
        case (WindowWidthFeatured >= 1920): WindowScrollFeatured = 450;
            break;
        case (WindowWidthFeatured >= 1280): WindowScrollFeatured = 350;
            break;
        default: WindowScrollFeatured = 450;
    }
    FeaturedProductsSectionMain.scrollLeft -= WindowScrollFeatured;
    console.log(WindowScrollFeatured);
});
RightButtonFeaturedMain.addEventListener('click', function () {
    let WindowWidthFeatured = window.innerWidth;
    let WindowScrollFeatured;
    switch (true) {
        case (WindowWidthFeatured >= 1920): WindowScrollFeatured = 450;
            break;
        case (WindowWidthFeatured >= 1280): WindowScrollFeatured = 350;
            break;
        default: WindowScrollFeatured = 450;
    }
    FeaturedProductsSectionMain.scrollLeft += WindowScrollFeatured;
    console.log(WindowScrollFeatured);
});
// ---------- Slider testimonials ---------- //
LeftButtonTestimonialsMain.addEventListener('click', function () {
    let WindowWidthTestimonials = window.innerWidth;
    let WindowScrollTestimonials;
    switch (true) {
        case (WindowWidthTestimonials >= 1920): WindowScrollTestimonials = 1500;
            break;
        case (WindowWidthTestimonials >= 1280): WindowScrollTestimonials = 1200;
            break;
        default: WindowScrollTestimonials = 1500;
    }
    TestimonialsSectionmMain.scrollLeft -= WindowScrollTestimonials;
    console.log(WindowScrollTestimonials);
});
RightButtonTestimonialsMain.addEventListener('click', function () {
    let WindowWidthTestimonials = window.innerWidth;
    let WindowScrollTestimonials;
    switch (true) {
        case (WindowWidthTestimonials >= 1920): WindowScrollTestimonials = 1500;
            break;
        case (WindowWidthTestimonials >= 1280): WindowScrollTestimonials = 1200;
            break;
        default: WindowScrollTestimonials = 1500;
    }
    TestimonialsSectionmMain.scrollLeft += WindowScrollTestimonials;
    console.log(WindowScrollTestimonials);
});
