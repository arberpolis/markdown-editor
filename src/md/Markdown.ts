import { HandlerFactory } from "./HandlerFactory";

export class Markdown {
    private readonly handler = new HandlerFactory().Build();

    public ToHtml(text: string): string {
        const markdownLines: string[] = text.split(`\n`);
        const htmlLines = markdownLines.map(this.handler.Handle.bind(this.handler));
        return htmlLines.join("\n");
    }
}
