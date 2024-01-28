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
ll.display();
