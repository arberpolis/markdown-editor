import { Markdown } from "./md/Markdown";

export class HtmlHandler {
    private readonly markdown: Markdown = new Markdown();
    private markdownInputElement: HTMLTextAreaElement;
    private markdownOutputElement: HTMLLabelElement;

    constructor(markdownInputElementId: string, markdownOutputElementId: string) {
        this.markdownInputElement = document.getElementById(markdownInputElementId) as HTMLTextAreaElement;
        if (!this.markdownInputElement) {
            throw new Error('No markdown input html element was found...');
        }
        this.markdownOutputElement = document.getElementById(markdownOutputElementId) as HTMLLabelElement;
        if (!this.markdownOutputElement) {
            throw new Error('No markdown output html element was found...');
        }
    }

    private RenderHtmlContent() {
        const innerHTML = this.markdown.ToHtml((this.markdownInputElement.value || "").trim());
        console.log({ innerHTML });
        Object.assign(this.markdownOutputElement, { innerHTML });
    }

    public Handle() {
        this.markdownInputElement.onkeyup = (event: KeyboardEvent) => {
            this.RenderHtmlContent();
        }
        window.onload = () => {
            this.RenderHtmlContent();
        }
    }
}