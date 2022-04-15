import { H3Visitor } from "./H3Visitor";
import { ParseChainHandler } from "../md/ParseChainHandler";

export class H3ChainHandler extends ParseChainHandler {
    constructor() {
        super(new H3Visitor(), '### ');
    }
}
