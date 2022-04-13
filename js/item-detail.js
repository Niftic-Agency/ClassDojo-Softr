
// document.addEventListener("DOMContentLoaded", function () {
//   // if all three sections exist then we're on a details page
//   const sectionIds = ['list-details2', 'faq1', 'typeform-script-insert-dinamically']

//   // wait until all three show up
//   const sectionCheck = setInterval(() => {
//     if (sectionIds.every(id => document.getElementById(id))) {
//       clearInterval(sectionCheck)

//       const sidebarDataCheck = setInterval(() => {
//         if ("itemDetailSidebar" in window) {
//           clearInterval(sidebarDataCheck);

//           // change the column widths of each section
//           sectionIds.forEach(sectionId => {

//             // wrap in setInterval to make sure column classes don't get overwritten
//             const colCheck = setInterval(() => {
//               const section = document.getElementById(sectionId);
//               const container = section.firstElementChild;
//               const rows = Array.from(container.children);
//               rows.forEach(row => {
//                 if (row.firstElementChild.className !== `col-12 col-lg-8 col-${sectionId}`) {
//                   row.firstElementChild.className = `col-12 col-lg-8 col-${sectionId}`;
//                   if (sectionId === 'list-details2') {
//                     if (document.querySelector('.item-details-sidebar')) {
//                       document.querySelector('.item-details-sidebar').remove();
//                     }

//                     const d = window.itemDetailSidebar;
//                     const sidebar = document.createElement('div');
//                     sidebar.className = "item-details-sidebar col-lg-4";
//                     sidebar.innerHTML = `
//                         <div class="sidebar-wrap">
//                           <div class="sidebar-box">
//                             <h3>${d.course}</h3>
//                             <p>${d.fdate}</p>
//                             <div class="teacher">
//                               <img src="${d.teacherpicture[0].url}" alt="${d.teacher} image">
//                               <div class="label">${d.teacher}</div>
//                             </div>
//                             <a href="#typeform-script-insert-dinamically">Enroll in class</a>
//                           </div>
//                         </div>
//                       `
          
//                     const row = document.querySelector('#list-details2 > .container > .row')
//                     row.appendChild(sidebar);

//                     document.body.style.overflowX = "visible";

//                   }
//                 }
//               })
//             }, 100)

//             // clean up interval after 10 seconds
//             setTimeout(() => clearInterval(colCheck), 10000)
//           })


//         }
//       }, 100)
      
//     }
//   })

//   // clean up interval after 10 seconds if section don't exist on page
//   setTimeout(() => clearInterval(sectionCheck), 10000)
// });