function main() {
  const range = 5000

  let generator = new Map()

  let selfNumber = []

  for (let i = 0; i < range; i++) {
    const total = d(i)

    generator.set(total, generator.get(total) || 0 + 1)
  }

  for (let i = 0; i < range; i++) {
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
