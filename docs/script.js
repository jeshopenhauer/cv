// Image Modal System
let activeModal = null;

// Create modal overlay if it doesn't exist
if (!document.querySelector('.image-modal-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', closeModal);
}

function closeModal() {
    if (activeModal) {
        activeModal.classList.remove('active');
        document.querySelector('.image-modal-overlay').classList.remove('active');
        activeModal = null;
    }
}

document.querySelectorAll('.hover-image').forEach(element => {
    const tooltip = element.querySelector('.image-tooltip');
    
    if (tooltip) {
        // Get all images in tooltip
        const images = tooltip.querySelectorAll('img');
        const title = element.textContent.trim().replace(' 📷', '').replace(' 📸', '');
        
        // Add title to tooltip
        if (!tooltip.querySelector('.image-tooltip-title')) {
            const titleEl = document.createElement('div');
            titleEl.className = 'image-tooltip-title';
            titleEl.textContent = title;
            tooltip.insertBefore(titleEl, images[0]);
        }
        
        // Wrap multiple images in a gallery container
        if (images.length > 1) {
            const gallery = document.createElement('div');
            gallery.className = 'image-gallery';
            images.forEach((img, idx) => {
                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'gallery-item';
                imgWrapper.appendChild(img.cloneNode(true));
                gallery.appendChild(imgWrapper);
            });
            
            // Replace images with gallery
            images.forEach(img => img.remove());
            const titleEl = tooltip.querySelector('.image-tooltip-title');
            tooltip.insertBefore(gallery, titleEl.nextSibling);
        }
        
        // Add close button
        if (!tooltip.querySelector('.close-modal')) {
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-modal';
            closeBtn.innerHTML = '✕';
            closeBtn.addEventListener('click', closeModal);
            tooltip.appendChild(closeBtn);
        }
        
        // Move tooltip to body for proper positioning
        document.body.appendChild(tooltip);
        
        // Show modal on mouse enter
        element.addEventListener('mouseenter', function() {
            closeModal(); // Close any open modal first
            tooltip.classList.add('active');
            document.querySelector('.image-modal-overlay').classList.add('active');
            activeModal = tooltip;
        });
        
        // Smart close: close modal when mouse leaves tooltip
        tooltip.addEventListener('mouseleave', function() {
            closeModal();
        });
    }
});

// Close modal on Escape key (moved to PDF section)

let activePdfModal = null;

function closePdfModal() {
    if (activePdfModal) {
        activePdfModal.classList.remove('active');
        document.querySelector('.image-modal-overlay').classList.remove('active');
        activePdfModal = null;
    }
}

// PDF Viewer Modal Functions
function openPdfModal(pdfFile) {
    console.log('Opening PDF:', pdfFile);
    let modal = document.getElementById('pdf-viewer-modal');
    
    // Create modal if it doesn't exist
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'pdf-viewer-modal';
        modal.innerHTML = `
            <div class="pdf-viewer-container">
                <div class="pdf-viewer-header">
                    <div class="pdf-viewer-title">PDF Document</div>
                    <button class="pdf-viewer-close" onclick="closePdfViewerModal()">✕</button>
                </div>
                <div class="pdf-viewer-content">
                    <iframe class="pdf-iframe"></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePdfViewerModal();
            }
        });
    }
    
    // Set PDF source with proper path
    const iframe = modal.querySelector('.pdf-iframe');
    console.log('Setting iframe src to:', pdfFile);
    iframe.src = pdfFile;
    modal.classList.add('active');
    console.log('Modal displayed');
}

function closePdfViewerModal() {
    const modal = document.getElementById('pdf-viewer-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Smart PDF hover system - intelligent close that avoids the gap between button and modal
let pdfHoverTimeout;
let currentPdfFile = null;

// Initialize PDF button hover system after page loads
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pdf-button').forEach(button => {
        const pdfFile = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        // Open PDF on mouse enter
        button.addEventListener('mouseenter', function(e) {
            clearTimeout(pdfHoverTimeout);
            currentPdfFile = pdfFile;
            openPdfModal(pdfFile);
        });
        
        // On mouse leave from button, schedule close with delay
        button.addEventListener('mouseleave', function() {
            pdfHoverTimeout = setTimeout(() => {
                closePdfViewerModal();
            }, 150);
        });
    });
    
    // Handle modal hover - prevent close if mouse enters modal
    const observer = setInterval(function() {
        const modal = document.getElementById('pdf-viewer-modal');
        if (modal && !modal.hasAttribute('data-hover-attached')) {
            
            modal.addEventListener('mouseenter', function() {
                clearTimeout(pdfHoverTimeout);
            });
            
            modal.addEventListener('mouseleave', function() {
                pdfHoverTimeout = setTimeout(() => {
                    closePdfViewerModal();
                }, 150);
            });
            
            modal.setAttribute('data-hover-attached', 'true');
        }
    }, 100);
});

// Close PDF modal on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePdfViewerModal();
        closeModal();
    }
});

// Contact Form (if needed)
const form = document.getElementById('contactForm');
if (form) {
    const statusMessage = document.getElementById('statusMessage');
    
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        statusMessage.style.display = 'block';
        statusMessage.style.color = '#667eea';
        statusMessage.textContent = '📤 Sending message... ';
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                statusMessage.style.color = '#28a745';
                statusMessage.textContent = '✅ Message sent successfully!';
                form.reset();
                
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Failed');
            }
        } catch (error) {
            statusMessage.style.color = '#dc3545';
            statusMessage.textContent = '❌ Something went wrong. Try again.';
            
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000);
        }
    });
}