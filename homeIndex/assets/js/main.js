function openTab(tabName) {
    var tabContent = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu_bar');
    const navbar = document.querySelector('.navbar');
    const label__sidebars = document.querySelectorAll('.label__sidebar');
    const tabs = document.querySelectorAll('.tab');  // Chọn các phần tử với lớp 'tab'
    let timeoutId = null;

    menuBar.addEventListener('click', function() {
        const isExpanded = navbar.classList.toggle('expanded');
        
        // Toggle class 'expanded' cho các phần tử .tab
        tabs.forEach(tab => {
          tab.classList.toggle('expanded', isExpanded);  // Áp dụng lớp 'expanded' dựa trên trạng thái của navbar
        });

        if (isExpanded) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                label__sidebars.forEach(label => {
                    label.classList.toggle('expanded');
                });
            }, 300);
        } else {
            if (timeoutId) {
                clearTimeout(timeoutId);
                label__sidebars.forEach(label => {
                    label.classList.remove('expanded');
                });
            }
        }
    });
});
