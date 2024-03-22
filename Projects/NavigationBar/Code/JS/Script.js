function HideShowSection() {
    let Section = document.querySelector('.HideSection');
    
    if(Section.classList.contains('HideSection')) {
        Section.classList.toggle('ShowSection');
    } else {
        Section.classList.toggle('HideSection');
    }
}
