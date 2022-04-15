import { ParseChainHandler } from "../md/ParseChainHandler";
import { HRVisitor } from "./HRVisitor";

export class HRHandler extends ParseChainHandler {
    constructor() {
        super(new HRVisitor(), "---");
    }
}
