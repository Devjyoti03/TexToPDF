function generatePDF() {
    const textAreaValue = document.getElementById('textArea').value;

    if (!textAreaValue.trim()) {
        alert('Please enter some text before converting to PDF.');
        return;
    }
    const rippleBtn = document.querySelector('.ripple-btn');

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = rippleBtn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${centerX - 100}px`;
    ripple.style.top = `${centerY - 100}px`;

    rippleBtn.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 2000);

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const wrapWidth = 180;
    const lines = pdf.splitTextToSize(textAreaValue, wrapWidth);
    for (let i = 0; i < lines.length; i++) {
        pdf.text(20, 20 + i * 10, lines[i]);
    }
    pdf.save("newpdf.pdf");                
}
