import { Handler } from "./Handler";
import { H1ChainHandler } from "../h1/H1ChainHandler";
import { HRHandler } from "../hr/HRHandler";
import { ParagraphHandler } from "../p/ParagraphHandler";
import { H3ChainHandler } from "../h3/H3ChainHandler";
import { H2ChainHandler } from "../h2/H2ChainHandler";

export class HandlerFactory {
    Build(): Handler {
        const header1Handler = new H1ChainHandler();
        const header2Handler = new H2ChainHandler();
        const header3Handler = new H3ChainHandler();
        const horizontalRuleHandler = new HRHandler();
        const paragraphHandler = new ParagraphHandler();
        header1Handler.SetNext(header2Handler);
        header2Handler.SetNext(header3Handler);
        header3Handler.SetNext(horizontalRuleHandler);
        horizontalRuleHandler.SetNext(paragraphHandler);
        return header1Handler as Handler;
    }
}
