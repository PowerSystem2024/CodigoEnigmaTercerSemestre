// (NO debe haber <script> ni </script> aquí)
const rodA_el = document.getElementById('rodA');
const rodB_el = document.getElementById('rodB');
const rodC_el = document.getElementById('rodC');
const numDisksInput = document.getElementById('numDisks');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const messageArea = document.getElementById('messageArea');

// Representación interna de las varillas y los discos
let rods = { 'A': [], 'B': [], 'C': [] };
let diskElements = {};
let isAnimating = false;
const animationSpeed = 700;
let moveCount = 0; // Nueva variable global para contar movimientos

// Paleta de colores para los discos
const diskColors = [
    'disk-color-0', 'disk-color-1', 'disk-color-2', 'disk-color-3',
    'disk-color-4', 'disk-color-5', 'disk-color-6', 'disk-color-7',
    'disk-color-8', 'disk-color-9'
];

// Inicializa y dibuja los discos en la varilla de origen
function setupDisks(n) {
    rods = { 'A': [], 'B': [], 'C': [] };
    diskElements = {};
    moveCount = 0; // Reinicia el contador al iniciar
    rodA_el.innerHTML = '<span class="rod-name">A (Origen)</span>';
    rodB_el.innerHTML = '<span class="rod-name">B (Auxiliar)</span>';
    rodC_el.innerHTML = '<span class="rod-name">C (Destino)</span>';
    messageArea.innerHTML = '<p>Juego reiniciado. Configura y presiona "Iniciar".</p>';

    const baseDiskWidth = 90;
    const diskWidthDecrement = 10;
    const diskHeight = 20; // Debe coincidir con tu CSS

    for (let i = n; i > 0; i--) {
        rods['A'].push(i);
        const disk = document.createElement('div');
        disk.classList.add('disk');
        disk.classList.add(diskColors[(i - 1) % diskColors.length]);
        disk.style.width = `${baseDiskWidth - (n - i) * diskWidthDecrement}%`;
        disk.textContent = i;
        disk.id = `disk-${i}`;
        disk.style.left = '50%';
        disk.style.transform = 'translateX(-50%)';
        disk.style.position = 'absolute';
        diskElements[i] = disk;
        rodA_el.appendChild(disk);
    }
    // Acomoda los discos visualmente en la varilla A
    updateRodVisual('A');
    updateRodVisual('B');
    updateRodVisual('C');
}

// Función para acomodar los discos en la varilla visualmente
function updateRodVisual(rodName) {
    const rodElement = document.getElementById(`rod${rodName}`);
    const disks = Array.from(rodElement.querySelectorAll('.disk'));
    const diskHeight = 20;
    disks.forEach((disk, idx) => {
        disk.style.bottom = `${idx * diskHeight}px`;
    });
}

// Registra un mensaje en el área de mensajes
function logMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    messageArea.appendChild(p);
    messageArea.scrollTop = messageArea.scrollHeight;
}

// Mueve visualmente un disco de una varilla a otra
async function moveDiskVisual(diskNumber, fromRodName, toRodName) {
    if (isAnimating) {
        const diskElement = diskElements[diskNumber];
        const fromRodElement = document.getElementById(`rod${fromRodName}`);
        const toRodElement = document.getElementById(`rod${toRodName}`);

        if (diskElement && fromRodElement && toRodElement) {
            const diskToMove = Array.from(fromRodElement.children).find(child => child.id === `disk-${diskNumber}`);
            if (diskToMove) {
                fromRodElement.removeChild(diskToMove);
            } else {
                console.error(`Error: No se encontró el elemento del disco ${diskNumber} en la varilla ${fromRodName}`);
                return;
            }
            toRodElement.appendChild(diskElement);
            moveCount++; // Incrementa el contador aquí
            logMessage(`Mover disco ${diskNumber} desde ${fromRodName} hacia ${toRodName}`);
            updateRodVisual(fromRodName);
            updateRodVisual(toRodName);
        } else {
            console.error("Error: Elemento de disco o varilla no encontrado.", {diskNumber, fromRodName, toRodName, diskElement, fromRodElement, toRodElement});
        }
        await new Promise(resolve => setTimeout(resolve, animationSpeed));
    }
}

// Algoritmo recursivo de las Torres de Hanoi
async function hanoi(n, source, destination, auxiliary) {
    if (!isAnimating) return;
    if (n === 1) {
        const diskToMove = rods[source].pop();
        rods[destination].push(diskToMove);
        await moveDiskVisual(diskToMove, source, destination);
        return;
    }
    await hanoi(n - 1, source, auxiliary, destination);
    if (!isAnimating) return;
    const diskToMove = rods[source].pop();
    rods[destination].push(diskToMove);
    await moveDiskVisual(diskToMove, source, destination);
    if (!isAnimating) return;
    await hanoi(n - 1, auxiliary, destination, source);
}

// Event Listener para el botón de Iniciar
startButton.addEventListener('click', async () => {
    if (isAnimating) {
        logMessage("La animación ya está en curso.");
        return;
    }
    const n = parseInt(numDisksInput.value);
    if (isNaN(n) || n < 1 || n > 8) {
        logMessage("Por favor, introduce un número de discos entre 1 y 8.");
        alert("Número de discos inválido. Debe ser entre 1 y 8.");
        return;
    }
    isAnimating = true;
    startButton.disabled = true;
    numDisksInput.disabled = true;
    resetButton.textContent = "Detener Animación";
    setupDisks(n);
    logMessage(`Iniciando Torres de Hanoi con ${n} discos.`);
    try {
        await hanoi(n, 'A', 'C', 'B');
        if (isAnimating) {
            logMessage("¡Torres de Hanoi completado!");
            logMessage(`Total de movimientos: ${moveCount}`); // Muestra el total aquí
        }
    } catch (error) {
        console.error("Error durante la animación de Hanoi:", error);
        logMessage("Error durante la animación. Revisa la consola.");
    } finally {
        if (isAnimating) {
            isAnimating = false;
        }
        startButton.disabled = false;
        numDisksInput.disabled = false;
        resetButton.textContent = "Reiniciar";
    }
});

// Event Listener para el botón de Reiniciar/Detener
resetButton.addEventListener('click', () => {
    if (isAnimating) {
        isAnimating = false;
        startButton.disabled = false;
        numDisksInput.disabled = false;
        resetButton.textContent = "Reiniciar";
        logMessage("Animación detenida por el usuario.");
    } else {
        const n = parseInt(numDisksInput.value) || 3;
        if (isNaN(parseInt(numDisksInput.value)) || parseInt(numDisksInput.value) < 1 || parseInt(numDisksInput.value) > 8) {
            numDisksInput.value = 3;
        }
        setupDisks(parseInt(numDisksInput.value));
        logMessage("Juego reiniciado. Listo para una nueva simulación.");
    }
});

// Configuración inicial al cargar la página
window.onload = () => {
    setupDisks(parseInt(numDisksInput.value));
};