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
    FeaturedProductsSectionMain.scrollLeft -= 450;
});
RightButtonFeaturedMain.addEventListener('click', function () {
    FeaturedProductsSectionMain.scrollLeft += 450;
});
// ---------- Slider testimonials ---------- //
LeftButtonTestimonialsMain.addEventListener('click', function () {
    TestimonialsSectionmMain.scrollLeft -= 1500;
});
RightButtonTestimonialsMain.addEventListener('click', function () {
    TestimonialsSectionmMain.scrollLeft += 1500;
});
