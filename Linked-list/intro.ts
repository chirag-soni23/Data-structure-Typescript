class ListNode {
    val: number;
    next: ListNode | null;
    constructor(v: number) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    size: number;
    head: ListNode | null;
    tail: ListNode | null;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    getSize = (): number => {
        return this.size;
    }

    display = (): void => {
        // TC: O(N), SC: O(1)
        let s = "";
        let temp = this.head;

        while (temp !== null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        console.log(`${s} null`);
    };

    addLast = (val: number): void => {
        // TC: O(1), SC: O(1)
        let nn = new ListNode(val);
        if (this.size === 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail!.next = nn;
            this.tail = nn;
        }
        this.size++;
    };
    addFirst = (val:number):void=>{
        let nn = new ListNode(val);
        if(this.size == 0){
            this.head = nn;
            this.tail =nn
        }else{
            nn.next = this.head
            this.head = nn
        }
        this.size++
    }
}

let ll = new LinkedList();

ll.addLast(20);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
ll.addLast(60);
ll.addFirst(10)
ll.display();
