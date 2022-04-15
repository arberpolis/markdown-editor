import { TagType } from "../TagType";
import { TagVisitor } from "../TagVisitor";

export class ParagraphVisitor extends TagVisitor {
    constructor() {
        super(TagType.Paragraph);
    }
}
