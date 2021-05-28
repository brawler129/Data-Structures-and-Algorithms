# Here I have created a stack implementation using arrays to better understand stacks

class Stack():

    def __init__(self):
        self.stack = []
        self.length = 0

    def push(self, item):
        self.stack.append(item)
        self.length += 1
        return self.stack

    def pop(self):
        if self.length < 1:
            return None
        self.length -= 1
        return self.stack.pop()

    def peek(self):
        if self.length < 1:
            return None
        return self.stack[self.length - 1]


myStack = Stack()
print(myStack.push(1))
print(myStack.peek())
print(myStack.push(3))
print(myStack.pop())
print(myStack.peek())
print(myStack.push(4))
print(myStack.push(10))
