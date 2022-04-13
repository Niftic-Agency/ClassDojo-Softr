document.addEventListener("DOMContentLoaded", function() {
  // if all three sections exist then we're on a details page
  const sectionIds = ['list-details2','faq1','typeform-script-insert-dinamically']
  if (sectionIds.every(id => document.getElementById(id))) {

    // change the column widths of each section
    sectionIds.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const container = section.firstElementChild;
        const rows = Array.from(container.children);
        rows.forEach(row => {
            row.firstElementChild.className = "col-12 col-lg-8"
        })
    })
  }
});