let elements = ['motivational', 'programmer', 'motivator', 'content', 'instructor', 'educator'];

function showElement(index) {
    elements.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    document.getElementById(elements[index]).style.display = 'flex';
    
    setTimeout(() => {
        index = (index + 1) % elements.length;
                showElement(index);
    }, 2800); 
}

showElement(0);

 

    const spans = document.querySelectorAll('#teach span');

    let currentIndex = 0;

    const colorRanges = {
        js: ['rgb(255, 255, 0)', 'rgb(255, 165, 0)'],
        react: ['rgb(173, 216, 230)', 'rgb(68, 68, 208)'],
        redux: ['rgb(122, 126, 127)', 'rgb(130, 0, 128)'],
        Node: ['rgb(128, 128, 128)', 'rgb(104, 92, 92)'],
        python: ['rgb(123, 121, 121)', 'rgb(111, 110, 100)'],
        mongo: ['rgb(144, 238, 144)', 'rgb(0, 128, 0)'],
        pandas: ['rgb(128, 128, 128)', 'rgb(196, 30, 38)'],
        numby: ['rgb(128, 128, 128)', 'rgb(21, 0, 222)'],
        html: ['rgb(144, 238, 144)', 'rgb(255, 255, 144)'],
    };

    function transitionColor(span, startColor, endColor, duration) {
        const startTime = Date.now();
        function updateColor() {
            const trans = Date.now() - startTime;
            if (trans >= duration) {
                span.style.color = endColor;
            } else {
                const progress = trans / duration;
                const r = Math.floor(startColor.r + (endColor.r - startColor.r) * progress);
                const g = Math.floor(startColor.g + (endColor.g - startColor.g) * progress);
                const b = Math.floor(startColor.b + (endColor.b - startColor.b) * progress);
                span.style.color = `rgb(${r}, ${g}, ${b})`;
                requestAnimationFrame(updateColor);
            }
        }
        requestAnimationFrame(updateColor);
    }

    function displayNextSpan() {
        spans.forEach(span => span.style.display = 'none');
        const currentSpan = spans[currentIndex];
        currentSpan.style.display = 'inline';
        const range = colorRanges[currentSpan.id];
        const startColor = parseColor(range[0]);
        const endColor = parseColor(range[1]);
        transitionColor(currentSpan, startColor, endColor, 1500); 
        currentIndex = (currentIndex + 1) % spans.length;
    }
    displayNextSpan();
    setInterval(displayNextSpan, 3000);
    function parseColor(color) {
        const [r, g, b] = color.match(/\d+/g).map(Number);
        return { r, g, b };
    }
