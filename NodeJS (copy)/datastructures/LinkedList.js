const Node = require("./Node.js");

module.exports = class LinkedList {
    constructor() {
      this.head   = null;
      this.length = 0;
    }
  
    add(data) {
        const nodeToAdd = new Node(data);
        let nodeToCheck = this.head;
        
        if(!nodeToCheck) {
            this.head = nodeToAdd;
            this.length++;        }else{
            while(nodeToCheck.next) {
                nodeToCheck = nodeToCheck.next;
            }
        
            nodeToCheck.next = nodeToAdd;
            this.length++;
        }
    }

    get(num) {
        let nodeToCheck = this.head;
        let count = 0;
        
        while(count < num) {
            nodeToCheck = nodeToCheck.next;
            count++;
        }

        if(num > this.length){
            nodeToCheck = null;
        }
        
        return nodeToCheck;
    }

    remove(num) {
        let nodeToCheck = this.head;
        let count = 0;
        let prevNode = null;
        
        if(num == 0) {
            this.head = nodeToCheck.next;
            this.length--;
            
            return this.head;
        }

        if(num > length){
            return null;
        }
        
        while(count < num) {
            prevNode = nodeToCheck;
            nodeToCheck = nodeToCheck.next;
            count++;
        }
        
        prevNode.next = nodeToCheck.next;
        nodeToCheck = null;
        this.length--;
        
        return this.head;
    }

    printList(text){
      console.log("" + text);
      for(var i = 0; i < this.length; i++){
          console.log(this.get(i).data);
      }
    }  
};