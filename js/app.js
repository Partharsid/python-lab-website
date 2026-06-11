// Main Application
let app;

class App {
    constructor() {
        this.currentTask = 'home';
        this.editors = {};
        this.sidebar = document.getElementById('sidebar');
        this.contentArea = document.getElementById('contentArea');
        this.navList = document.getElementById('navList');
        this.pageTitle = document.getElementById('pageTitle');
        this.searchInput = document.getElementById('searchInput');
    }

    init() {
        this.bindEvents();
        this.initTheme();
        this.loadTask('home');
    }

    bindEvents() {
        // Navigation
        this.navList.addEventListener('click', (e) => {
            const item = e.target.closest('.nav-item');
            if (item) {
                const task = item.dataset.task;
                this.loadTask(task);
                this.closeSidebar();
            }
        });

        // Mobile menu
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            this.sidebar.classList.toggle('open');
        });

        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            this.closeSidebar();
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Search
        this.searchInput.addEventListener('input', (e) => {
            this.filterTasks(e.target.value);
        });

        // Modal close
        document.getElementById('modalClose').addEventListener('click', () => {
            document.getElementById('vizModal').classList.remove('active');
        });

        document.getElementById('vizModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('vizModal')) {
                document.getElementById('vizModal').classList.remove('active');
            }
        });

        // Close sidebar on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSidebar();
                document.getElementById('vizModal').classList.remove('active');
            }
        });
    }

    initTheme() {
        const saved = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
        this.updateThemeIcon(saved);
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        this.updateThemeIcon(next);
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    closeSidebar() {
        this.sidebar.classList.remove('open');
    }

    filterTasks(query) {
        const items = this.navList.querySelectorAll('.nav-item');
        const lowerQuery = query.toLowerCase();
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(lowerQuery) ? '' : 'none';
        });
    }

    loadTask(taskId) {
        // Update nav
        this.navList.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.task === taskId);
        });

        this.currentTask = taskId;

        try {
            if (taskId === 'home') {
                this.renderHome();
            } else {
                this.renderTask(taskId);
            }
        } catch (err) {
            console.error('Error loading task:', err);
            this.contentArea.innerHTML = `<div style="padding:40px;color:var(--danger);">Error loading task: ${err.message}</div>`;
        }
    }

    renderHome() {
        this.pageTitle.textContent = 'Python Programming Lab';

        const taskEntries = Object.entries(TASKS);
        const totalQuestions = taskEntries.reduce((sum, [_, t]) => sum + t.questions.length, 0);

        let html = `
            <div class="home-hero fade-in">
                <h2>Python Programming Lab</h2>
                <p>Complete guide with ${totalQuestions}+ programs, interactive code runner, and visualizations</p>
            </div>

            <div class="stats-grid fade-in">
                <div class="stat-card">
                    <div class="number">${taskEntries.length}</div>
                    <div class="label">Tasks</div>
                </div>
                <div class="stat-card">
                    <div class="number">${totalQuestions}</div>
                    <div class="label">Programs</div>
                </div>
                <div class="stat-card">
                    <div class="number">14</div>
                    <div class="label">Topics</div>
                </div>
                <div class="stat-card">
                    <div class="number">&infin;</div>
                    <div class="label">Practice</div>
                </div>
            </div>

            <h3 style="margin-bottom:16px;color:var(--text-primary);font-size:1.1rem;">All Tasks</h3>
            <div class="task-grid fade-in">
        `;

        taskEntries.forEach(([id, task]) => {
            html += `
                <div class="task-card" onclick="app.loadTask('${id}')">
                    <div class="task-num">${id.replace('task', '')}</div>
                    <div class="task-info">
                        <h3>${task.title}</h3>
                        <p>${task.description}</p>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        this.contentArea.innerHTML = html;
    }

    renderTask(taskId) {
        const task = TASKS[taskId];
        if (!task) return;

        this.pageTitle.textContent = task.title;

        let html = `
            <div class="task-header fade-in">
                <h2>${task.title}</h2>
                <p>${task.description}</p>
            </div>
        `;

        task.questions.forEach((q, idx) => {
            const editorId = `editor-${taskId}-${idx}`;
            const outputId = `output-${taskId}-${idx}`;
            const vizCanvasId = `viz-canvas-${taskId}-${idx}`;

            html += `
                <div class="question-card fade-in" id="qcard-${taskId}-${idx}">
                    <div class="question-header" onclick="app.toggleQuestion('${taskId}', ${idx})">
                        <div class="question-num">${idx + 1}</div>
                        <div class="question-title">${q.title}</div>
                        <div class="question-toggle"><i class="fas fa-chevron-down"></i></div>
                    </div>
                    <div class="question-body">
                        <div class="explanation">${q.explanation}</div>

                        <div class="editor-container">
                            <div class="editor-toolbar">
                                <span class="lang-badge"><i class="fab fa-python"></i> Python</span>
                                <div class="toolbar-actions">
                                    <button class="btn btn-reset" onclick="app.resetCode('${taskId}', ${idx})">
                                        <i class="fas fa-undo"></i> Reset
                                    </button>
                                    <button class="btn btn-run" id="run-btn-${taskId}-${idx}" onclick="app.runCode('${taskId}', ${idx})">
                                        <i class="fas fa-play"></i> Run
                                    </button>
                                    ${q.hasVisualization ? `
                                    <button class="btn btn-visualize" id="viz-btn-${taskId}-${idx}" onclick="app.visualize('${taskId}', ${idx})">
                                        <i class="fas fa-chart-bar"></i> Visualize
                                    </button>
                                    ` : ''}
                                </div>
                            </div>
                            <div id="${editorId}"></div>
                        </div>

                        ${q.hasVisualization ? `<div class="visualize-output" id="viz-container-${taskId}-${idx}" style="display:none;">
                            <canvas id="${vizCanvasId}" width="800" height="400"></canvas>
                        </div>` : ''}

                        <div class="output-container" id="output-container-${taskId}-${idx}" style="display:none;">
                            <div class="output-header">
                                <i class="fas fa-terminal"></i> Output
                            </div>
                            <div class="output-body" id="${outputId}"></div>
                        </div>
                    </div>
                </div>
            `;
        });

        this.contentArea.innerHTML = html;

        // Initialize CodeMirror editors after DOM is updated
        requestAnimationFrame(() => {
            task.questions.forEach((q, idx) => {
                const editorId = `editor-${taskId}-${idx}`;
                const editorEl = document.getElementById(editorId);
                if (editorEl && typeof CodeMirror !== 'undefined') {
                    const editor = CodeMirror(editorEl, {
                        value: q.code,
                        mode: 'python',
                        theme: 'dracula',
                        lineNumbers: true,
                        matchBrackets: true,
                        autoCloseBrackets: true,
                        indentUnit: 4,
                        tabSize: 4,
                        indentWithTabs: false,
                        lineWrapping: true,
                        viewportMargin: Infinity
                    });
                    this.editors[`${taskId}-${idx}`] = editor;
                    editor._originalCode = q.code;
                }
            });

            // Auto-open first question
            this.openQuestion(taskId, 0);
        });

        // Pre-load Pyodide in background
        setTimeout(() => {
            if (typeof pyodideRunner !== 'undefined') {
                pyodideRunner.load();
            }
        }, 2000);
    }

    openQuestion(taskId, idx) {
        const card = document.getElementById(`qcard-${taskId}-${idx}`);
        if (card && !card.classList.contains('open')) {
            card.classList.add('open');
            const editor = this.editors[`${taskId}-${idx}`];
            if (editor) {
                setTimeout(() => editor.refresh(), 100);
            }
        }
    }

    toggleQuestion(taskId, idx) {
        const card = document.getElementById(`qcard-${taskId}-${idx}`);
        if (card) {
            card.classList.toggle('open');
            const editor = this.editors[`${taskId}-${idx}`];
            if (editor && card.classList.contains('open')) {
                setTimeout(() => editor.refresh(), 100);
            }
        }
    }

    async runCode(taskId, idx) {
        const editor = this.editors[`${taskId}-${idx}`];
        if (!editor) return;

        const code = editor.getValue();
        const btn = document.getElementById(`run-btn-${taskId}-${idx}`);
        const outputContainer = document.getElementById(`output-container-${taskId}-${idx}`);
        const outputEl = document.getElementById(`output-${taskId}-${idx}`);

        // Show loading
        btn.innerHTML = '<span class="loading-spinner"></span> Running...';
        btn.disabled = true;
        outputContainer.style.display = 'block';
        outputEl.className = 'output-body';
        outputEl.textContent = 'Loading Python interpreter...';

        try {
            // Detect input() calls and collect values
            const inputMatches = code.match(/input\s*\(\s*['"]([^'"]*)['"]\s*\)/g);
            let inputValues = [];

            if (inputMatches && inputMatches.length > 0) {
                inputValues = await this.collectInputs(inputMatches, outputEl);
            }

            // Run code
            const result = await pyodideRunner.run(code, inputValues);

            // Show output
            outputEl.textContent = result.output;
            if (result.error) {
                outputEl.classList.add('error');
                outputEl.classList.remove('success');
            } else {
                outputEl.classList.add('success');
                outputEl.classList.remove('error');
            }
        } catch (err) {
            outputEl.textContent = 'Error: ' + err.message;
            outputEl.classList.add('error');
        }

        // Reset button
        btn.innerHTML = '<i class="fas fa-play"></i> Run';
        btn.disabled = false;
    }

    collectInputs(inputMatches, outputEl) {
        return new Promise((resolve) => {
            const values = [];
            let currentIdx = 0;

            const createInputUI = () => {
                const match = inputMatches[currentIdx];
                const promptText = match.match(/input\s*\(\s*['"]([^'"]*)['"]\s*\)/);
                const label = promptText ? promptText[1] : 'Enter value:';

                const inputDiv = document.createElement('div');
                inputDiv.className = 'input-prompt';
                inputDiv.innerHTML = `
                    <label>${label}</label>
                    <input type="text" id="temp-input-${currentIdx}" autofocus>
                    <button class="btn btn-run" style="margin-top:8px;padding:6px 14px;" id="temp-submit-${currentIdx}">Submit</button>
                `;

                outputEl.appendChild(inputDiv);

                const input = document.getElementById(`temp-input-${currentIdx}`);
                const submit = document.getElementById(`temp-submit-${currentIdx}`);

                const handleSubmit = () => {
                    values.push(input.value || '');
                    inputDiv.remove();
                    currentIdx++;

                    if (currentIdx < inputMatches.length) {
                        createInputUI();
                    } else {
                        resolve(values);
                    }
                };

                submit.addEventListener('click', handleSubmit);
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') handleSubmit();
                });
                input.focus();
            };

            createInputUI();
        });
    }

    resetCode(taskId, idx) {
        const editor = this.editors[`${taskId}-${idx}`];
        if (editor) {
            editor.setValue(editor._originalCode);
        }
    }

    visualize(taskId, idx) {
        const task = TASKS[taskId];
        const question = task.questions[idx];
        if (!question.hasVisualization) return;

        const vizContainer = document.getElementById(`viz-container-${taskId}-${idx}`);
        const canvasId = `viz-canvas-${taskId}-${idx}`;

        if (vizContainer.style.display === 'none') {
            vizContainer.style.display = 'block';
            if (typeof pyodideRunner !== 'undefined') {
                pyodideRunner.visualize('', question.vizType, canvasId);
            }
        } else {
            vizContainer.style.display = 'none';
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app = new App();
    app.init();
});
