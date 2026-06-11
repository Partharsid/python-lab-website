// roundRect polyfill for older browsers
if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
        if (typeof r === 'number') r = [r, r, r, r];
        if (!Array.isArray(r)) r = [0, 0, 0, 0];
        const [tl, tr, br, bl] = r;
        this.moveTo(x + tl, y);
        this.lineTo(x + w - tr, y);
        this.quadraticCurveTo(x + w, y, x + w, y + tr);
        this.lineTo(x + w, y + h - br);
        this.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
        this.lineTo(x + bl, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - bl);
        this.lineTo(x, y + tl);
        this.quadraticCurveTo(x, y, x + tl, y);
        this.closePath();
        return this;
    };
}

// Pyodide Runner - In-browser Python execution
class PyodideRunner {
    constructor() {
        this.pyodide = null;
        this.loading = false;
        this.loaded = false;
    }

    async load() {
        if (this.loaded) return true;
        if (this.loading) {
            // Wait for existing load
            while (this.loading) {
                await new Promise(r => setTimeout(r, 100));
            }
            return this.loaded;
        }

        this.loading = true;
        try {
            // Load Pyodide
            if (typeof loadPyodide === 'undefined') {
                await this._loadScript('https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js');
            }
            this.pyodide = await loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
            });
            this.loaded = true;
            console.log('Pyodide loaded successfully');
        } catch (error) {
            console.error('Failed to load Pyodide:', error);
            this.loaded = false;
        }
        this.loading = false;
        return this.loaded;
    }

    _loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    async run(code, inputValues = []) {
        if (!this.loaded) {
            const success = await this.load();
            if (!success) {
                return { output: 'Error: Failed to load Python interpreter. Please refresh and try again.', error: true };
            }
        }

        try {
            // Capture stdout
            this.pyodide.runPython(`
import sys
from io import StringIO
_stdout = StringIO()
sys.stdout = _stdout
`);

            // Handle input() calls by replacing them with pre-set values
            let processedCode = code;
            if (inputValues.length > 0) {
                let inputIndex = 0;
                processedCode = code.replace(/input\s*\(\s*[^)]*\)/g, () => {
                    if (inputIndex < inputValues.length) {
                        const val = inputValues[inputIndex++];
                        return `"${val.replace(/"/g, '\\"')}"`;
                    }
                    return '""';
                });
            } else {
                // Replace input() with empty string if no inputs provided
                processedCode = code.replace(/input\s*\(\s*[^)]*\)/g, '""');
            }

            // Run the code
            let result;
            try {
                result = this.pyodide.runPython(processedCode);
            } catch (e) {
                // Restore stdout
                this.pyodide.runPython('sys.stdout = sys.__stdout__');
                const stdout = this.pyodide.runPython('_stdout.getvalue()');
                return {
                    output: stdout + (stdout ? '\n' : '') + `Error: ${e.message}`,
                    error: true
                };
            }

            // Get stdout
            const stdout = this.pyodide.runPython('_stdout.getvalue()');

            // Restore stdout
            this.pyodide.runPython('sys.stdout = sys.__stdout__');

            let output = stdout || '';
            if (result !== undefined && result !== null && String(result) !== 'None') {
                output += (output ? '\n' : '') + String(result);
            }

            return { output: output || '(No output)', error: false };
        } catch (error) {
            return { output: `Error: ${error.message}`, error: true };
        }
    }

    async visualize(code, vizType, canvasId) {
        if (!this.loaded) {
            const success = await this.load();
            if (!success) return;
        }

        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, width, height);

        switch (vizType) {
            case 'triangle':
                this._drawTriangle(ctx, width, height);
                break;
            case 'binary_tree':
                this._drawBinaryTree(ctx, width, height);
                break;
            case 'matrix':
                this._drawMatrix(ctx, width, height);
                break;
            case 'canvas_rect':
                this._drawCanvasRect(ctx, width, height);
                break;
            case 'canvas_point':
                this._drawCanvasPoint(ctx, width, height);
                break;
            case 'canvas_circle':
                this._drawCanvasCircle(ctx, width, height);
                break;
            case 'logic_gates':
                this._drawLogicGates(ctx, width, height);
                break;
            case 'word_freq':
                this._drawWordFreq(ctx, width, height);
                break;
            case 'text_stats':
                this._drawTextStats(ctx, width, height);
                break;
            default:
                ctx.fillStyle = '#a0a4b8';
                ctx.font = '16px Inter';
                ctx.textAlign = 'center';
                ctx.fillText('Visualization not available for this task', width / 2, height / 2);
        }
    }

    _drawTriangle(ctx, w, h) {
        const numbers = [5, 4, 3, 2, 1];
        const cellSize = 50;
        const startX = w / 2 - (5 * cellSize) / 2;
        const startY = 40;

        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 20px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Triangle Pattern Visualization', w / 2, 25);

        numbers.forEach((num, row) => {
            const count = 6 - num;
            const rowWidth = count * cellSize;
            const x = w / 2 - rowWidth / 2;
            const y = startY + row * (cellSize + 10);

            for (let col = 0; col < count; col++) {
                const px = x + col * cellSize;
                const hue = (row * 40 + col * 20) % 360;
                ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
                ctx.beginPath();
                ctx.roundRect(px + 2, y + 2, cellSize - 4, cellSize - 4, 8);
                ctx.fill();

                ctx.fillStyle = '#fff';
                ctx.font = 'bold 22px JetBrains Mono';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(num), px + cellSize / 2, y + cellSize / 2);
            }
        });

        // Arrow showing pattern
        ctx.fillStyle = '#a0a4b8';
        ctx.font = '14px Inter';
        ctx.textAlign = 'left';
        ctx.fillText('Each row i is printed (6-i) times', 20, h - 20);
    }

    _drawBinaryTree(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Binary String Generation (n=3)', w / 2, 25);

        const levels = [
            [''],
            ['0', '1'],
            ['00', '01', '10', '11'],
            ['000', '001', '010', '011', '100', '101', '110', '111']
        ];

        const colors = ['#6c5ce7', '#a29bfe', '#74b9ff', '#00b894'];

        levels.forEach((level, lvl) => {
            const y = 50 + lvl * 100;
            const spacing = w / (level.length + 1);

            level.forEach((val, i) => {
                const x = spacing * (i + 1);

                // Draw node
                ctx.fillStyle = colors[lvl];
                ctx.beginPath();
                ctx.arc(x, y + 20, 22, 0, Math.PI * 2);
                ctx.fill();

                // Draw text
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 14px JetBrains Mono';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(val || 'root', x, y + 20);

                // Draw connections to parent
                if (lvl > 0) {
                    const parentLevel = levels[lvl - 1];
                    const parentIdx = Math.floor(i / 2);
                    const parentSpacing = w / (parentLevel.length + 1);
                    const px = parentSpacing * (parentIdx + 1);
                    const py = 50 + (lvl - 1) * 100 + 20;

                    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(px, py + 22);
                    ctx.lineTo(x, y - 2);
                    ctx.stroke();
                }
            });
        });
    }

    _drawMatrix(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Matrix Visualization (3×3)', w / 2, 25);

        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const cellSize = 60;
        const startX = w / 2 - (3 * cellSize) / 2;
        const startY = 50;

        matrix.forEach((row, i) => {
            row.forEach((val, j) => {
                const x = startX + j * cellSize;
                const y = startY + i * cellSize;

                const hue = (i * 60 + j * 30) % 360;
                ctx.fillStyle = `hsl(${hue}, 65%, 55%)`;
                ctx.beginPath();
                ctx.roundRect(x + 2, y + 2, cellSize - 4, cellSize - 4, 8);
                ctx.fill();

                ctx.fillStyle = '#fff';
                ctx.font = 'bold 22px JetBrains Mono';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(val), x + cellSize / 2, y + cellSize / 2);
            });
        });

        // Labels
        ctx.fillStyle = '#a0a4b8';
        ctx.font = '13px Inter';
        ctx.textAlign = 'left';
        ctx.fillText(`matrix[0] = [1, 2, 3]`, startX + 3 * cellSize + 20, startY + 30);
        ctx.fillText(`matrix[1] = [4, 5, 6]`, startX + 3 * cellSize + 20, startY + 90);
        ctx.fillText(`matrix[2] = [7, 8, 9]`, startX + 3 * cellSize + 20, startY + 150);
    }

    _drawCanvasRect(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Canvas - Rectangle Drawing', w / 2, 25);

        // Draw grid
        const gridSize = 15;
        const offsetX = 60;
        const offsetY = 50;
        const cols = 40;
        const rows = 15;

        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= cols; i++) {
            ctx.beginPath();
            ctx.moveTo(offsetX + i * gridSize, offsetY);
            ctx.lineTo(offsetX + i * gridSize, offsetY + rows * gridSize);
            ctx.stroke();
        }
        for (let j = 0; j <= rows; j++) {
            ctx.beginPath();
            ctx.moveTo(offsetX, offsetY + j * gridSize);
            ctx.lineTo(offsetX + cols * gridSize, offsetY + j * gridSize);
            ctx.stroke();
        }

        // Draw rectangle
        const rx = 5, ry = 3, rw = 20, rh = 8;
        ctx.fillStyle = 'rgba(108,92,231,0.3)';
        ctx.fillRect(offsetX + rx * gridSize, offsetY + ry * gridSize, rw * gridSize, rh * gridSize);

        ctx.strokeStyle = '#6c5ce7';
        ctx.lineWidth = 2;
        ctx.strokeRect(offsetX + rx * gridSize, offsetY + ry * gridSize, rw * gridSize, rh * gridSize);

        // Label
        ctx.fillStyle = '#a0a4b8';
        ctx.font = '12px Inter';
        ctx.textAlign = 'left';
        ctx.fillText(`Rectangle at (${rx},${ry}), width=${rw}, height=${rh}`, offsetX, offsetY + rows * gridSize + 20);
    }

    _drawCanvasPoint(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Canvas - Point Drawing', w / 2, 25);

        const points = [
            { x: 5, y: 5, label: 'A' },
            { x: 10, y: 3, label: 'B' },
            { x: 15, y: 7, label: 'C' },
            { x: 20, y: 10, label: 'D' },
            { x: 30, y: 2, label: 'E' }
        ];

        const gridSize = 18;
        const offsetX = 40;
        const offsetY = 45;
        const colors = ['#e17055', '#00b894', '#6c5ce7', '#fdcb6e', '#74b9ff'];

        // Draw diagonal dots
        for (let i = 0; i < 10; i++) {
            const x = 25 + i;
            const y = 2 + i;
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.beginPath();
            ctx.arc(offsetX + x * gridSize, offsetY + y * gridSize, 6, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw labeled points
        points.forEach((p, i) => {
            ctx.fillStyle = colors[i];
            ctx.beginPath();
            ctx.arc(offsetX + p.x * gridSize, offsetY + p.y * gridSize, 10, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px JetBrains Mono';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(p.label, offsetX + p.x * gridSize, offsetY + p.y * gridSize);

            ctx.fillStyle = '#a0a4b8';
            ctx.font = '11px Inter';
            ctx.fillText(`(${p.x},${p.y})`, offsetX + p.x * gridSize, offsetY + p.y * gridSize + 18);
        });
    }

    _drawCanvasCircle(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Canvas - Circle Drawing', w / 2, 25);

        // Draw circle 1
        ctx.strokeStyle = '#6c5ce7';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(w / 2 - 80, h / 2 + 10, 100, 0, Math.PI * 2);
        ctx.stroke();

        // Draw circle 2
        ctx.strokeStyle = '#00b894';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(w / 2 + 100, h / 2, 60, 0, Math.PI * 2);
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#a0a4b8';
        ctx.font = '13px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Circle 1 (r=8)', w / 2 - 80, h / 2 + 130);
        ctx.fillText('Circle 2 (r=4)', w / 2 + 100, h / 2 + 80);

        // Center points
        ctx.fillStyle = '#e17055';
        ctx.beginPath();
        ctx.arc(w / 2 - 80, h / 2 + 10, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w / 2 + 100, h / 2, 4, 0, Math.PI * 2);
        ctx.fill();
    }

    _drawLogicGates(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Logic Gates Truth Tables', w / 2, 25);

        const gates = [
            { name: 'AND', truth: [[0,0,0],[0,1,0],[1,0,0],[1,1,1]] },
            { name: 'OR', truth: [[0,0,0],[0,1,1],[1,0,1],[1,1,1]] },
            { name: 'XOR', truth: [[0,0,0],[0,1,1],[1,0,1],[1,1,0]] },
            { name: 'NOT', truth: [[0,1],[1,0]] }
        ];

        const startX = 40;
        const startY = 50;
        const colW = 180;

        gates.forEach((gate, gi) => {
            const x = startX + gi * colW;
            const y = startY;

            // Gate name
            ctx.fillStyle = '#6c5ce7';
            ctx.font = 'bold 16px JetBrains Mono';
            ctx.textAlign = 'center';
            ctx.fillText(gate.name, x + 70, y);

            // Header
            ctx.fillStyle = '#a0a4b8';
            ctx.font = 'bold 13px JetBrains Mono';
            const headers = gate.name === 'NOT' ? ['A', 'OUT'] : ['A', 'B', 'OUT'];
            headers.forEach((h, hi) => {
                ctx.fillText(h, x + hi * 45 + 20, y + 25);
            });

            // Rows
            gate.truth.forEach((row, ri) => {
                const ry = y + 45 + ri * 28;
                row.forEach((val, ci) => {
                    ctx.fillStyle = val ? '#00b894' : '#e17055';
                    ctx.font = 'bold 14px JetBrains Mono';
                    ctx.fillText(String(val), x + ci * 45 + 20, ry);
                });
            });
        });
    }

    _drawWordFreq(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Word Frequency Analysis', w / 2, 25);

        const words = [
            { word: 'python', count: 6 },
            { word: 'is', count: 5 },
            { word: 'a', count: 3 },
            { word: 'programming', count: 2 },
            { word: 'language', count: 2 },
            { word: 'great', count: 1 },
            { word: 'fun', count: 1 },
            { word: 'and', count: 1 }
        ];

        const maxCount = Math.max(...words.map(w => w.count));
        const barHeight = 30;
        const startY = 50;
        const maxBarWidth = w - 200;
        const colors = ['#6c5ce7', '#a29bfe', '#74b9ff', '#00b894', '#fdcb6e', '#e17055', '#fd79a8', '#00cec9'];

        words.forEach((item, i) => {
            const y = startY + i * (barHeight + 8);
            const barWidth = (item.count / maxCount) * maxBarWidth;

            // Word label
            ctx.fillStyle = '#a0a4b8';
            ctx.font = '13px JetBrains Mono';
            ctx.textAlign = 'right';
            ctx.fillText(item.word, 95, y + barHeight / 2 + 4);

            // Bar
            ctx.fillStyle = colors[i % colors.length];
            ctx.beginPath();
            ctx.roundRect(105, y, barWidth, barHeight, 4);
            ctx.fill();

            // Count
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 13px JetBrains Mono';
            ctx.textAlign = 'left';
            ctx.fillText(String(item.count), 110 + barWidth, y + barHeight / 2 + 4);
        });
    }

    _drawTextStats(ctx, w, h) {
        ctx.fillStyle = '#e4e6eb';
        ctx.font = 'bold 18px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText('Text Analysis Statistics', w / 2, 25);

        const stats = [
            { label: 'Words', value: 15, color: '#6c5ce7' },
            { label: 'Vowels', value: 22, color: '#a29bfe' },
            { label: 'Spaces', value: 14, color: '#74b9ff' },
            { label: 'Lowercase', value: 58, color: '#00b894' },
            { label: 'Uppercase', value: 6, color: '#fdcb6e' }
        ];

        const maxVal = Math.max(...stats.map(s => s.value));
        const barHeight = 40;
        const startX = 120;
        const startY = 60;
        const maxBarWidth = w - 200;

        stats.forEach((stat, i) => {
            const y = startY + i * (barHeight + 15);
            const barWidth = (stat.value / maxVal) * maxBarWidth;

            // Label
            ctx.fillStyle = '#a0a4b8';
            ctx.font = '14px Inter';
            ctx.textAlign = 'right';
            ctx.fillText(stat.label, 110, y + barHeight / 2 + 5);

            // Bar background
            ctx.fillStyle = 'rgba(255,255,255,0.05)';
            ctx.beginPath();
            ctx.roundRect(startX, y, maxBarWidth, barHeight, 6);
            ctx.fill();

            // Bar fill
            ctx.fillStyle = stat.color;
            ctx.beginPath();
            ctx.roundRect(startX, y, barWidth, barHeight, 6);
            ctx.fill();

            // Value
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 16px JetBrains Mono';
            ctx.textAlign = 'left';
            ctx.fillText(String(stat.value), startX + barWidth + 10, y + barHeight / 2 + 5);
        });

        // Pie chart
        const pieX = w / 2;
        const pieY = h - 100;
        const pieR = 50;
        let startAngle = 0;
        const total = stats.reduce((s, st) => s + st.value, 0);

        stats.forEach((stat) => {
            const sliceAngle = (stat.value / total) * 2 * Math.PI;
            ctx.fillStyle = stat.color;
            ctx.beginPath();
            ctx.moveTo(pieX, pieY);
            ctx.arc(pieX, pieY, pieR, startAngle, startAngle + sliceAngle);
            ctx.closePath();
            ctx.fill();
            startAngle += sliceAngle;
        });
    }
}

// Create global instance
window.pyodideRunner = new PyodideRunner();
