document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('.menu_bar');
    const navbar = document.querySelector('.navbar');
    const helloworld = document.querySelector('.helloworld')

    // Tạo thẻ <style> và thêm quy tắc CSS vào đó

    menuBar.addEventListener('click', function() {
        // Toggle class 'expanded' on navbar
        navbar.classList.toggle('expanded');
        helloworld.classList.toggle('Margin');
        const style = document.createElement('style');
        style.textContent = `
            .button{
                display: block;
                bottom: 30px;
                position: none;
            }
        `;
        document.head.appendChild(style);
    });
});