import { H2Visitor } from "./H2Visitor";
import { ParseChainHandler } from "../md/ParseChainHandler";

export class H2ChainHandler extends ParseChainHandler {
    constructor() {
        super(new H2Visitor(), '## ');
    }
}
