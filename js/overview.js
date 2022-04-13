var listArea = document.querySelector('section#list4');
if( listArea ) {
    var controlContainer = listArea.querySelector('.container'); // First container
    var newHolder = document.createElement('div');
    newHolder.className = 'mobile-filter-holder';
    newHolder.innerHTML = '<div class="js-toggle-modal-btn btn-inner-modal -backbtn">Close Filters</div>';
    controlContainer.appendChild(newHolder);
    var mobileFilters = document.querySelectorAll('section#list4 .container > .mobile-filter');
    [].forEach.call( mobileFilters, function(el) {
        newHolder.appendChild(el);
    });
    var clearFilters = document.createElement('div');
    clearFilters.className = 'clear-button-holder';
    clearFilters.innerHTML = '<div class="btn-inner-modal -clearfilters">Clear Filters</div>';
    newHolder.appendChild(clearFilters);

    clearFilters.querySelector('.-clearfilters').addEventListener('click', function() {
        [].forEach.call( document.querySelectorAll('.dropdown-menu > li.selected > a') , function(fil) {
            console.log(fil);
            fil.click();
        });
    });
    // Create toggle button 
    let toggleBtn = document.createElement('div');
    toggleBtn.classList.add('mobile-filter', 'sw-dropdowns-container', 'justify-content-between');
    toggleBtn.innerHTML = '    <div class="control-group"><div class="toggle-button-filter js-toggle-modal-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5C22 6.10457 21.1046 7 20 7H4C2.89543 7 2 6.10457 2 5ZM8 19C8 17.8954 8.89543 17 10 17H14C15.1046 17 16 17.8954 16 19C16 20.1046 15.1046 21 14 21H10C8.89543 21 8 20.1046 8 19ZM7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14H17C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10H7Z" fill="currentColor"/></svg></div></div>';
    controlContainer.querySelector('.row .search-parent').appendChild(toggleBtn);
    [].forEach.call( document.querySelectorAll('.js-toggle-modal-btn') , function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('filter-menu-toggled');
            if(document.querySelectorAll('.dropdown-menu > li.selected').length > 0) {
                document.querySelector('.toggle-button-filter').classList.add('active');
            } else {
                document.querySelector('.toggle-button-filter').classList.remove('active');
            }
        });
    });
}
