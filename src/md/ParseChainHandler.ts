import { Handler } from "./Handler";
import { LineParser } from "./LineParser";
import { Visit } from "../Visit";
import { Visitable } from "../Visitable";
import { Visitor } from "../Visitor";

export class ParseChainHandler extends Handler {
    private readonly visit: Visitable = new Visit();
    private readonly lineParser: LineParser = new LineParser();

    constructor(
        private readonly visitor: Visitor,
        private readonly markdownTag: string,
    ) {
        super();
    }

    protected CanHandle(line: string): boolean {
        const [isParsed,] = this.lineParser.Parse(line, this.markdownTag);
        return isParsed;
    }

    protected _Handle(line: string): string {
        const [,parsedLine] = this.lineParser.Parse(line, this.markdownTag);
        return this.visit.Accept(this.visitor, parsedLine);
    }
}
