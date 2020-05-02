const strings = ['a', 'b', 'c', 'd']; // 4 items = 16 bytes of storage

// accessing
strings[2]; // O(1)

// push
strings.push('e'); // O(1)

// pop 
strings.pop(); // O(1)

// unshift
strings.unshift('x'); // O(1)

// splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);