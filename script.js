// เพิ่มลูกเล่นเล็กน้อย เช่น แสดง confetti เมื่อโหลดหน้าเว็บ
window.addEventListener('DOMContentLoaded', () => {
    confetti();
    sparkle();
});

function confetti() {
    for (let i = 0; i < 60; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.animationDuration = (1 + Math.random() * 2) + 's';
        conf.style.background = `hsl(${Math.random()*360}, 80%, 85%)`;
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 3000);
    }
}

function sparkle() {
    const sparkleArea = document.querySelector('.sparkle');
    if (!sparkleArea) return;
    for (let i = 0; i < 18; i++) {
        const s = document.createElement('span');
        s.style.left = Math.random() * 100 + 'px';
        s.style.top = Math.random() * 100 + 'px';
        s.style.width = s.style.height = (6 + Math.random() * 8) + 'px';
        s.style.background = `rgba(255,255,255,${0.7 + Math.random() * 0.3})`;
        s.style.animationDelay = (Math.random() * 1.2) + 's';
        sparkleArea.appendChild(s);
    }
}

// สไตล์ confetti
const style = document.createElement('style');
style.innerHTML = `
.confetti {
    position: fixed;
    top: -20px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 0.7;
    z-index: 9999;
    animation: confetti-fall linear forwards;
}
@keyframes confetti-fall {
    to {
        transform: translateY(110vh) rotate(360deg);
    }
}`;
document.head.appendChild(style);
