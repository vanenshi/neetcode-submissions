class DynamicArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.length = 0;
    }

    get(i) {
        return this.items[i];
    }

    set(i, n) {
        this.items[i] = n;
    }

    pushback(n) {
        if (this.length == this.capacity) {
            this.resize();
        }

        this.items[this.length] = n;
        this.length++;
    }

    popback() {
        this.length--;
        return this.items[this.length];
    }

    resize() {
        this.capacity = this.capacity * 2;
    }

    getSize() {
        return this.length;
    }

    getCapacity() {
        return this.capacity;
    }
}
