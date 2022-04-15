import { Visitable } from "./Visitable";
import { Visitor } from "./Visitor";

export class Visit implements Visitable {
    Accept(visitor: Visitor, line: string): string {
        return visitor.Visit(line);
    }
}
