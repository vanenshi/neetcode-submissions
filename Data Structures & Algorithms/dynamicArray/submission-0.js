class DynamicArray {
    constructor(capacity) {
        this._capacity = capacity;
        this._items = [];
        this._length = 0;
    }

    // return the element value
    get(i) {
        return this._items[i];
    }

    // replace the element value
    set(i, n) {
        this._items[i] = n;
    }

    pushback(n) {
        const length = this.getSize();
        if (length == this._capacity) {
            this.resize();
        }

        this._items[length] = n;
        this._length++;
    }

    popback() {
        const length = this.getSize();
        this._length--;
        return this._items[length - 1];

    }

    resize() {
        this._capacity = this._capacity * 2;
    }

    getSize() {
        return this._length;
    }

    getCapacity() {
        return this._capacity;
    }
}
