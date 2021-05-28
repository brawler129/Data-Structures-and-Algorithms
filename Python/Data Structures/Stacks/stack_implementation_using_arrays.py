# Here I have created a stack implementation using arrays to better understand stacks


class Stack():

    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)
        return self.stack

    def pop(self):
        if len(self.stack) < 1:
            return None
        return self.stack.pop()

    def peek(self):
        if len(self.stack) < 1:
            return None
        return self.stack[len(self.stack) - 1]


my_stack = Stack()
print(my_stack.push(1))
print(my_stack.peek())
print(my_stack.push(3))
print(my_stack.pop())
print(my_stack.peek())
print(my_stack.push(4))
print(my_stack.push(10))
