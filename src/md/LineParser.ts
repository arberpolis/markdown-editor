export class LineParser {
    public Parse(value: string, tag: string): [boolean, string] {
        return value.startsWith(tag)
            ? [true, value.slice(tag.length)]
            : [false, ""]
        ;
    }
}
