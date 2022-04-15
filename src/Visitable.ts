import { Visitor } from "./Visitor";

export interface Visitable {
    Accept(visitor: Visitor, line: string): string;
}
