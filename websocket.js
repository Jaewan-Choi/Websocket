let websocket = new WebSocket("ws://127.0.0.1:8000/chat/test1")
websocket.onopen = () => {
    websocket.send(JSON.stringify({
        'message': '메세지 보냄',
        'anything': '아무거나 보냄'
    }))
}
websocket.onmessage = (e) => {
    const receiveData = JSON.parse(e.data)
    console.log(receiveData)
}
websocket.addEventListener('message', (e) => {
    const receiveData = JSON.parse(e.data)
    console.log(receiveData)
})