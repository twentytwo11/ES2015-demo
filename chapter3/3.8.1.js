//类语法
class Point{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    moveRight(step){
        return new Promise(resolve => resolve({
            x:this.x = step,
            y:this.y
        }))
    }
}

const p = new Point(2,5)
p.moveRight(3).then(({x,y}) => console.log(`(${x},${y})`))