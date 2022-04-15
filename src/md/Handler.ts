export abstract class Handler {
    protected next: Handler | null = null;

    protected abstract _Handle(line: string): string;

    protected abstract CanHandle(line: string): boolean;

    public Handle(line: string): string {
        return !this.CanHandle(line) && this.next
            ? this.next.Handle(line)
            : this._Handle(line);
    }

    public SetNext(next: Handler): void {
        this.next = next;
    }
}
