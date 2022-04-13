document.addEventListener("DOMContentLoaded", function() {
  // if all three sections exist then we're on a details page
  const sectionIds = ['list-details2','faq1','typeform-script-insert-dinamically']

  // wait until all three show up
  const sectionCheck = setInterval(() => {
    if (sectionIds.every(id => document.getElementById(id))) {
      clearInterval(sectionCheck)
  
      // change the column widths of each section
      sectionIds.forEach(sectionId => {
  
        // wrap in setInterval to make sure column classes don't get overwritten
        const colCheck = setInterval(() => {
          const section = document.getElementById(sectionId);
          const container = section.firstElementChild;
          const rows = Array.from(container.children);
          rows.forEach(row => {
            if (row.firstElementChild.className !== `col-12 col-lg-8 col-${sectionId}`) row.firstElementChild.className = `col-12 col-lg-8 col-${sectionId}`;
          }) 
        }, 100)
  
        // clean up interval after 10 seconds
        setTimeout(() => clearInterval(colCheck), 10000)
      })
    }
  })

  // clean up interval after 10 seconds if section don't exist on page
  setTimeout(() => clearInterval(sectionCheck), 10000)
});