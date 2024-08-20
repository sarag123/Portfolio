$(document).ready(function() {
    $('.connect').on('click', function() {
        // Create the pop-up content
        const popupContent = `
            <div id="popup" style="background-color: white; padding: 20px; border-radius: 10px; max-width: 300px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
                <p style="margin-bottom: 20px;">Want to learn more about me?</p>
                <p style="margin-bottom: 20px;">
                    <a href="https://www.linkedin.com/in/sara-ghanimeh" target="_blank">
                        Follow me on LinkedIn <i class="fab fa-linkedin"></i>
                    </a>
                </p>
                <p>
                    <a href="https://dribbble.com/Sarag123" target="_blank">
                        Check out some of my daily design projects on Dribbble <i class="fab fa-dribbble"></i>
                    </a>
                </p>
            </div>
        `;

        // Append the pop-up to the body
        $('body').append(`<div id="popup-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;"></div>`);
        $('#popup-overlay').append(popupContent);

        // Close the pop-up when clicking outside of it
        $('#popup-overlay').on('click', function(e) {
            if (e.target.id === 'popup-overlay') {
                $('#popup-overlay').remove();
            }
        });
    });
});