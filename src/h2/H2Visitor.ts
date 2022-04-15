import { TagType } from "../TagType";
import { TagVisitor } from "../TagVisitor";

export class H2Visitor extends TagVisitor {
    constructor() {
        super(TagType.Header2);
    }
}
