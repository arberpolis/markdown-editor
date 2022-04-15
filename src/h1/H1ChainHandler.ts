import { H1Visitor } from "./H1Visitor";
import { ParseChainHandler } from "../md/ParseChainHandler";

export class H1ChainHandler extends ParseChainHandler {
    constructor() {
        super(new H1Visitor(), '# ');
    }
}
