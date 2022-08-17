export class Util {
    // static - permite usar a classe sem precisar instancia-la 
    public static randomizer(star : number, end: number): number {
        return (star + Math.random() * (end - star));
    }
}