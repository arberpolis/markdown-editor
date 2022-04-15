import { TagType } from "../TagType";
import { TagVisitor } from "../TagVisitor";

export class H3Visitor extends TagVisitor {
    constructor() {
        super(TagType.Header3);
    }
}
