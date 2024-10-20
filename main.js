
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var menuButton = document.getElementById('menu-button');
        var dropdownMenu = document.getElementById('dropdown-menu');

        menuButton.addEventListener('click', function(event) {
            event.preventDefault();
            // Toggle the 'show' class on the dropdown menu
            dropdownMenu.classList.toggle('show');
        });

        // Click outside to close the menu
        document.addEventListener('click', function(event) {
            if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
</script>
