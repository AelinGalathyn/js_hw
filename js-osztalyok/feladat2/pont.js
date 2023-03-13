// JS-ben is van lehetőség osztály definiálására, bár objektumokat enélkül is létre tudtunk eddig is hozni.
class Pont {
    // Privát adattagot #-el jelöljük.
    #x;
    #y;
    constructor (x, y) {
        this.#x = x;
        this.#y = y;
    }

    // get/set property létrehozása
    get x() {
        return this.#x;
    }

    set x(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#x = value;
        }
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#y = value;
        }
    }


    // getter/setter fügvény használata
    getX() {
        return this.#x;
    }

    setX(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#x = value;
        }
    }

    getY() {
        return this.#y;
    }

    setY(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#y = value;
        }
    }

    tavolsagAzOrigotol() {
        const tavolsag=Math.fround(Math.hypot(this.#x, this.#y));
        return tavolsag;
    }

    static tavolsag(this, p2){
        x1=this.getX();
        y1=this.getY();
        x2=p2.getX();
        y2=p2.getY();
    }

    toString() {
        return `Pont{x = ${this.#x}, y = ${this.#y}}`;
    }
}
