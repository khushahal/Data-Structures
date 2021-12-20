/*Linked List implementation*/

// node class which will be used to create the single node.
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

//Linked list class 
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //function which linked list has
    //add(element);
    //insertAt(element, location);
    //removeFrom(location);
    //removeElement(element);

    //helper methods
    //isEmpty()
    //size_Of_list()
    //printList()

    add(element){
        //creates new nodes
        const node = new Node(element);
        let current;
        //if list is empty then use make it head

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;

            //iterate till the last node and add the element there
            while(current.next){
                current = current.next;
            }
            // and add the node
            current.next = node;
        }
        //increase the size
        this.size++;
    }


// insert element at the given positions
   insertAt(element, index) {
    if(index < 0 || index > this.size) {
        return console.log("Please enter a valid index.");
    } else{

        //create a new node
        const node = new Node(element);
        let curr, prev;

        if(index == 0){
         node.next = this.head;
         this.head = node;
        } else {
            let i = 0;
            curr = this.head;

            // Iterate till react given index
            while(index > i){
                prev = curr; 
                curr = curr.next;
                ++i;
            }

            // adding node by updating previous and current pointers
            node.next = curr;
            prev.next = node;
        }
    }
    this.size++;
   }

   //remove element  from given list;
   removeElement(element){
    let curr , prev = null;

    curr = this.head;

    while(curr.element != null) {
        if(curr.element == element){
            //if we found it on first place. change the head with current next.
            if(prev == null){
                this.head = curr.next;
            } else {
                prev.next = curr.next;
            }
            this.size--;
            return curr.element; //return deleted element.
        }
        prev = curr;
        curr = curr.next;
    }
    return -1;
   }

   //find the index of the element
   indexOf(element){
       let i=0; curr = this.head;
       while(curr.next != null) {
        if(curr.element == element){
            return i;
        }
        ++i;
        curr = curr.next;
       }
       //not found
       return -1;
   }


   // remove the item from given index;
   removeFrom(index){

    if(index < 0 || index > this.size){
        return console.log("Please enter a valid index.");
    } else{

        let i = 0, curr = this.head, prev = null;

        //delete first element.
        if(index == 0){
            this.head = curr.next;
        } else {
            while(i < index){
                prev =  curr;
                curr = curr.next;
                ++i;
            }

            // remove the element
            prev.next = curr.next;
        }
        --this.size;
        return curr.element;
    }
   }



     /* helper methods */
    //return if linked list is empty or not.
    isEmpty(){
        return this.size === 0;
    }

    //give the size of linked list.
    sizeOfList(){
        console.log("size of linked list is: ",this.size);
    }

    printListItems(){
        let curr = this.head;
        let i = 0;

        while(curr){
            console.log(`item ${i}`, curr.element);
            curr = curr.next;
            ++i;
        }
    }

    /* helper methods */

}



// calling linked list methods and 

//creating linked list.
const l1 = new LinkedList();

//checking if linked list is empty
console.log("is linked list empty ?  answer: ", l1.isEmpty());

// Adding an element to list.
l1.add(10);
l1.add(20);
l1.add(30);
l1.add(40);

//printing all the elements.
l1.printListItems();

l1.insertAt(50, 4);

l1.removeFrom(1);

l1.sizeOfList();

l1.printListItems();

