export class Game {
    public players :string[] = ['Mero', 'Sero', 'Xatar', 'SSIO']; // mit public sagen wir, dass wir von außerhalb auf dieses Objekt zugreifen können
    public stack :string[] = []; // :string meint, dass innerhalb des Arrays nur Zeichen stehen ohne Number o.ä.
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){
        for (let i = 1; i < 14; i++) { // Mit dieser forSchleife pushen wir alle Kartennamen in den stack array
            // Da die Kartenbezeichnungen mit 1 Enden und pro Kartensorte 13 existieren fangen wir mit i = 1 an und itirieren bis max 13 
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }

        shuffle(this.stack); // Mit dieser Funktion die wir aufrufen, wird unser Array mit allen Karten durchgemischt
    }
}

export function shuffle<T>(array: T[]): T[] { // Solche Funktionen müssen außerhalb des objectes Game eingefügt werden
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};