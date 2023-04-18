import ModalComponent from 'ghost-admin/components/modal-base';
import diff from 'node-htmldiff';

export default ModalComponent.extend({

    init() {
        this._super(...arguments);
        this.post = this.model;
    },

    get previous() {
        return `<div class="koenig-react-editor"><div class="koenig-lexical  "><div data-kg="editor"><div class="kg-prose" contenteditable="true" spellcheck="true" data-lexical-editor="true" style="user-select: text; white-space: pre-wrap; word-break: break-word;" data-koenig-dnd-container="true" role="textbox"><p dir="ltr" data-koenig-dnd-droppable="true"><strong data-lexical-text="true">Lorem Ipsum</strong><span data-lexical-text="true">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><p dir="ltr" data-koenig-dnd-droppable="true"><span data-lexical-text="true">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span></p><p data-koenig-dnd-droppable="true"><br></p></div></div>   <div id="koenig-drag-drop-ghost-container" style="position: fixed; width: 100%; z-index: 10001;"></div></div></div></div>`;
    },

    get current() {
        return `<div class="koenig-react-editor"><div class="koenig-lexical  "><div data-kg="editor"><div class="kg-prose" contenteditable="true" spellcheck="true" data-lexical-editor="true" style="user-select: text; white-space: pre-wrap; word-break: break-word;" data-koenig-dnd-container="true" role="textbox"><p dir="ltr" data-koenig-dnd-droppable="true"><strong data-lexical-text="true">Lorem Ipsum</strong><span data-lexical-text="true">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is one of the worse things I've ever read. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><p dir="ltr" data-koenig-dnd-droppable="true"><span data-lexical-text="true">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</span></p><p data-koenig-dnd-droppable="true"><br></p></div></div>   <div id="koenig-drag-drop-ghost-container" style="position: fixed; width: 100%; z-index: 10001;"></div></div></div>`;
    },

    get postDiff() {
        let diffHtml = diff(this.previous, this.current);
        return diffHtml;
    }
});
