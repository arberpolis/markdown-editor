import { HtmlHandler } from "./HtmlHandler";

export const author = 'Arber Qytyku' as const;

new HtmlHandler('markdown-input', 'markdown-output').Handle();
