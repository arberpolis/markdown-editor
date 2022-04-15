import { Handler } from "../md/Handler";
import { Visit } from "../Visit";
import { Visitable } from "../Visitable";
import { Visitor } from "../Visitor";
import { ParagraphVisitor } from "./ParagraphVisitor";

export class ParagraphHandler extends Handler {
    private visit: Visitable = new Visit();
    private visitor: Visitor = new ParagraphVisitor();

    constructor() {
        super();
    }

    protected CanHandle(): boolean {
        return true;
    }

    protected _Handle(line: string): string {
        return this.visit.Accept(this.visitor, line);
    }
}
