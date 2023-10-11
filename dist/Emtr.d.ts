declare class Emtr {
    private handlers;
    handle(event: string, callback: Function): Function;
    fire(event: string, ...args: any): void;
    fireAsync(event: string, ...args: any): Promise<void>;
    remove(event: string, callback: Function): void;
    count(event: string): number;
    clear(): void;
}
export default Emtr;
