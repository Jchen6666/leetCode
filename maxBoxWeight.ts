let setA: number[] = []
const boxDic: any = {}
const boxSet: number[] = []
let totalWeight = 0
let minimumSizeOfSetA = Number.MAX_VALUE 
let maxSetAWeight = 0

function maxBoxWeight(curIndex: number, curWeight: number, curSetA: number[]) {
    if (curWeight > totalWeight/2) {

        const curResSum = curSetA.reduce((previous, cur) => previous + cur, 0)
        const isBetterResult = (curSetA.length < minimumSizeOfSetA) || (curSetA.length == minimumSizeOfSetA && curResSum > maxSetAWeight)

        if (isBetterResult) {
            minimumSizeOfSetA = curSetA.length
            setA = curSetA.reverse()
            maxSetAWeight = curResSum
        }
        return 
    }

    if (curIndex < 0) {
        return 
    }

    maxBoxWeight(curIndex - 1, curWeight, [...curSetA])

    const curNumber = boxSet[curIndex]
    curWeight += curNumber * boxDic[curNumber]

    for(let i = 0; i < boxDic[curNumber]; i++) {
        curSetA.push(curNumber)
    }

    maxBoxWeight(curIndex - 1, curWeight, [...curSetA])
}

function main() {
    const arr = [1, 2, 2, 4]
    // const arr = [3 ,7, 5, 6, 2]  
    for(let i = 0; i < arr.length; i++) {
        totalWeight += arr[i]
        if(!boxDic[arr[i]]) {
            boxSet.push(arr[i])
            boxDic[arr[i]] = 1
            continue
        } 
        boxDic[arr[i]] ++ 
    }
    boxSet.sort()
    maxBoxWeight(boxSet.length - 1, 0, [])
    console.log(setA)
}

main()

