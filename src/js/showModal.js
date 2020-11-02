export default function showModal() {
    const btn = document.querySelector('.btn');
    const cont = document.querySelector('.container')
    btn.onclick = function() {
        btn.style.opacity = 0;
        cont.style.background = 'rgba(0, 0, 0, 0.3)';
    }
}