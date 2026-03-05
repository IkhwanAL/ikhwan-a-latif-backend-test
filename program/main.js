function main() {
  let generator = new Map()

  let selfNumber = []

  for (let i = 0; i < 5000; i++) {
    const total = d(i)

    generator.set(total, generator.get(total) || 0 + 1)
  }

  for (let i = 0; i < 5000; i++) {
    if (!generator.has(i)) {
      selfNumber.push(i)
    }
  }

  for (const v of selfNumber) {
    console.log(v)
  }

}

function d(num) {
  const strNum = num.toString()
  const splitStr = strNum.split("");

  let total = num;

  for (const str of splitStr) {
    total += +str
  }

  return total
}

main()
