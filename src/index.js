
/* global SillyTavern */
import mermaid from 'mermaid';
import './style.css';

const {
    eventSource,
    event_types,
} = SillyTavern.getContext();

const events = [
    event_types.CHARACTER_MESSAGE_RENDERED,
    event_types.USER_MESSAGE_RENDERED,
    event_types.CHAT_CHANGED,
    event_types.MESSAGE_SWIPED,
    event_types.MESSAGE_UPDATED,
];

// Set event listeners for chat events.
for (const event of events) {
    eventSource.on(event, renderMermaidCharts);
}

async function renderMermaidCharts() {
    const blocks = Array.from(document.querySelectorAll('#chat pre code'));
    const nodes = [];
    for (const block of blocks) {
        if (block.classList.contains('custom-language-mermaid') || block.classList.contains('language-mermaid')) {
            const parent = block.parentElement;
            parent.classList.add('mermaid');
            parent.querySelector('.code-copy')?.remove();
            parent.innerHTML = block.innerHTML;
            nodes.push(parent);
        }
    }

    const chatElement = document.getElementById('chat');
    const chatHeight = chatElement.scrollHeight;

    if (nodes.length > 0) {
        await mermaid.run({ nodes: nodes });
    }

    const scrollPosition = chatElement.scrollTop;
    const newChatHeight = chatElement.scrollHeight;
    const diff = newChatHeight - chatHeight;
    chatElement.scrollTop = scrollPosition + diff;
}

jQuery(() => {
    mermaid.initialize({
        theme: 'dark',
        startOnLoad: false,
        securityLevel: 'loose',
    });
});
