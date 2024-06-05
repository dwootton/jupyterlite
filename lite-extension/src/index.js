import { JupyterLiteServer } from '@jupyterlite/server';
import * as LZString from 'lz-string';
import { NotebookPanel, INotebookTracker } from '@jupyterlab/notebook';
import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ToolbarButton } from '@jupyterlab/apputils';
import { Clipboard } from '@jupyterlab/apputils';

// Compress the notebook text and set as URL parameter
function compressNotebookContent(notebookPanel) {
    const notebookContent = JSON.stringify(notebookPanel.context.model.toJSON());
    const compressedContent = LZString.compressToEncodedURIComponent(notebookContent);
    const newUrl = `${window.location.origin}${window.location.pathname}#notebook=${compressedContent}`;
    Clipboard.copyToSystem(newUrl);
    alert('URL copied to clipboard');
}

// Decompress the URL parameter and load notebook content
function decompressNotebookContent() {
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const compressedContent = urlParams.get('notebook');
    if (compressedContent) {
        const decompressedContent = LZString.decompressFromEncodedURIComponent(compressedContent);
        return JSON.parse(decompressedContent);
    }
    return null;
}

// Add "Save to URL" button to the notebook toolbar
function addSaveToUrlButton(app, notebookTracker) {
    const saveToUrlButton = new ToolbarButton({
        label: 'Save to URL',
        onClick: () => {
            const current = notebookTracker.currentWidget;
            if (current) {
                compressNotebookContent(current);
            }
        },
        tooltip: 'Save notebook content to URL and copy to clipboard'
    });

    notebookTracker.widgetAdded.connect((sender, panel) => {
        panel.toolbar.insertItem(10, 'saveToUrl', saveToUrlButton);
    });
}

const extension = {
    id: 'lite-extension',
    autoStart: true,
    requires: [INotebookTracker],
    activate: (app, notebookTracker) => {
        console.log('JupyterLab extension lite-extension is activated!');
        addSaveToUrlButton(app, notebookTracker);

        const initialContent = decompressNotebookContent();
        if (initialContent) {
            notebookTracker.currentWidget.context.model.fromJSON(initialContent);
        }
    }
};

console.log('in Jupyterlite extension index.js')
export default extension;
