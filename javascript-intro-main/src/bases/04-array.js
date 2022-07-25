const arr = [1, 2, 3, 4]
arr.push('asd')

const arr2 = [...arr]

arr2.push('qwe')

const arr3 = arr2.map(function (n) {
   if (n == 1) return 'uno'
   else return n
})

arr3.push('zxc')

console.log(arr)
console.log(arr2)
console.log(arr3)