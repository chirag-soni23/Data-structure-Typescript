"use strict";
class ListNode {
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.getSize = () => {
            return this.size;
        };
        this.display = () => {
            // TC: O(N), SC: O(1)
            let s = "";
            let temp = this.head;
            while (temp !== null) {
                s += temp.val + " -> ";
                temp = temp.next;
            }
            console.log(`${s} null`);
        };
        this.addLast = (val) => {
            // TC: O(1), SC: O(1)
            let nn = new ListNode(val);
            if (this.size === 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.addFirst = (val) => {
            // TC: O(1), SC: O(1)
            let nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.removeFirst = () => {
            var _a, _b, _c;
            if (this.size == 0) {
                console.log("Linkedlist is already empty");
                return -1;
            }
            else if (this.size == 1) {
                let ret = (_a = this.head) === null || _a === void 0 ? void 0 : _a.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret;
            }
            else {
                // size > 1
                let ret = (_b = this.head) === null || _b === void 0 ? void 0 : _b.val;
                this.head = ((_c = this.head) === null || _c === void 0 ? void 0 : _c.next) || null;
                this.size--;
                return ret;
            }
        };
        this.removeLast = () => {
            var _a, _b;
            if (this.size == 0) {
                console.log("Linkedlist is already empty");
                return -1;
            }
            else if (this.size == 1) {
                let ret = (_a = this.head) === null || _a === void 0 ? void 0 : _a.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret;
            }
            else {
                //size > 1
                let ret = (_b = this.tail) === null || _b === void 0 ? void 0 : _b.val;
                let temp = this.head;
                while (temp.next != this.tail) {
                    temp = temp.next;
                }
                temp.next = null;
                this.tail = temp;
                this.size--;
                return ret;
            }
        };
        this.getAt = (target) => {
            if (target < 0 || target >= this.size)
                return null;
            let temp = this.head;
            let i = 0;
            while (i < target) {
                temp = temp.next;
                i++;
            }
            return temp;
        };
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
}
let ll = new LinkedList();
ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.addLast(60);
ll.addFirst(10);
// console.log(ll.removeFirst());
// console.log(ll.removeLast());
console.log(ll.getAt(2));
ll.display();
