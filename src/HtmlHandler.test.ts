import { HtmlHandler } from "./HtmlHandler";

describe('HtmlHandler', () => {
    let sut: HtmlHandler;

    beforeEach(() => {
        document.body.innerHTML = ''
        + '<div class="container w-full h-screen max-w-screen-2xl mx-auto">'
        + '<!--...-->'
        + '<div class="h-full gap-4 columns-2">'
        + '<div class="m-10 left">'
        + '<input type="textarea" id="markdown-input" class="h-full form-textarea rounded text-clip text-pink-700" />'
        + '</div>'
        + '<div class="m-10 right">'
        + '<label for="markdown-input" id="markdown-output" class="h-full"></label>'
        + '</div>'
        + '</div>'
        + '</div>';
        sut = new HtmlHandler('markdown-input', 'markdown-output');
    });

    test('Should be defined', () => {
        expect(sut).toBeDefined();        
    });
})
