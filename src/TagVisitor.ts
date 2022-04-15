import { closing, opening, TagType } from "./TagType";
import { Visitor } from "./Visitor";

export abstract class TagVisitor implements Visitor {
    constructor(private readonly tag: TagType) {}

    Visit(parsedLine: string): string {
        return [opening(this.tag), parsedLine, closing(this.tag)].join("");
    }
}
