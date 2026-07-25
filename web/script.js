const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    // Mostrar mensaje de carga
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
            statusMessage.textContent = '✅ Message sent successfully!  I\'ll get back to you soon.';
            form.reset();
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        statusMessage.style.color = '#dc3545';
        statusMessage.textContent = '❌ Oops! Something went wrong.  Please try again.';
        
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);
    }
});
