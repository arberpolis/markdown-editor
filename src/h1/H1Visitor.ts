import { TagType } from "../TagType";
import { TagVisitor } from "../TagVisitor";

export class H1Visitor extends TagVisitor {
    constructor() {
        super(TagType.Header1);
    }
}
