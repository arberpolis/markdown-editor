import { TagType } from "../TagType";
import { TagVisitor } from "../TagVisitor";

export class HRVisitor extends TagVisitor {
    constructor() {
        super(TagType.HorizontalRule);
    }
}
