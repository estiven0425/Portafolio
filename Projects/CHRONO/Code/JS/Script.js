// ---------- Localizadores ---------- //
const FeaturedProductsSection = document.getElementById('FeaturedProductsSection');
const LeftButton = document.getElementById('LeftFeaturedProductsSection');
const RightButton = document.getElementById('RightFeaturedProductsSection');
// ---------- Slider ---------- //
LeftButton.addEventListener('click', function () {
    FeaturedProductsSection.scrollLeft -= 450;
});
RightButton.addEventListener('click', function () {
    FeaturedProductsSection.scrollLeft += 450;
});
