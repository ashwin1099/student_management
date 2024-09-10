document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, select');

    inputs.forEach(input => {
        // Function to toggle the label class based on input value
        const toggleLabel = () => {
            const label = input.nextElementSibling;
            if ((input.tagName === 'SELECT' && input.value !== '') || (input.tagName === 'INPUT' && input.value.trim() !== '')) {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        };

        // Initial check
        toggleLabel();

        // Event listeners
        input.addEventListener('focus', toggleLabel);
        input.addEventListener('blur', toggleLabel);
        input.addEventListener('change', toggleLabel);
        input.addEventListener('input', toggleLabel);
    });
});


// Keep track of the currently expanded profile
let currentExpandedProfile = null;

function toggleProfile(profile) {
    // If the clicked profile is already expanded, close it
    if (profile === currentExpandedProfile) {
        profile.classList.remove('expanded');
        currentExpandedProfile = null;
    } else {
        // If another profile is already expanded, close it smoothly
        if (currentExpandedProfile) {
            currentExpandedProfile.classList.remove('expanded');
        }

        // Expand the clicked profile
        profile.classList.add('expanded');
        currentExpandedProfile = profile;
    }
}

// Close the expanded profile when clicking outside
document.addEventListener('click', function (event) {
    if (currentExpandedProfile && !currentExpandedProfile.contains(event.target)) {
        currentExpandedProfile.classList.remove('expanded');
        currentExpandedProfile = null;
    }
}, true);
