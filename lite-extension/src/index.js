import { JupyterLiteServer } from '@jupyterlite/server';
import * as LZString from 'lz-string';

// Compress the notebook text and set as URL parameter
function compressNotebookContent() {
    const notebooks = document.querySelectorAll('.jp-Notebook');
    notebooks.forEach((notebook) => {
        const notebookContent = notebook.textContent;
        const compressedContent = LZString.compressToEncodedURIComponent(notebookContent);
        window.location.hash = `#notebook=${compressedContent}`;
    });
}

// Decompress the URL parameter and load notebook content
function decompressNotebookContent() {
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const compressedContent = urlParams.get('notebook');
    if (compressedContent) {
        const decompressedContent = LZString.decompressFromEncodedURIComponent(compressedContent);
        // Load the decompressed content into the notebook
        const notebooks = document.querySelectorAll('.jp-Notebook');
        notebooks.forEach((notebook) => {
            notebook.textContent = decompressedContent;
        });
    }
}

window.addEventListener('load', () => {
    decompressNotebookContent();
    document.getElementById('save-button').addEventListener('click', compressNotebookContent);
});
