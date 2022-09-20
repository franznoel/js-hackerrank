class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  console.log(l1, l2)
  // const reversedL1= l1.reverse().join("").map(Number)
  // const reversedL2 = l2.reverse().join("").map(Number)

  // const result = reversedL1 + reversedL2
  // return result.reverse().split("")
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))
