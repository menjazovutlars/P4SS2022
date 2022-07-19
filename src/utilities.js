
const labelMap = {
  1: {name: '1', color:'red'},
  2: {name: '2', color: 'yellow'},
  3: {name: '3', color: 'blue'}
}




export const drawRect = (detections, ctx) => {
    // Get prediction results
    let dy = 50;
    detections.forEach(prediction => {
        //const [x, y, width, height] = prediction['bbox'];
        const text = prediction['className'];
        dy += 20
        
        // Styling
        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
    
        ctx.beginPath()
        ctx.fillText(text, 20, dy)
        //ctx.rect(x, y, width, height)
        ctx.stroke()
        
    })
    
}

