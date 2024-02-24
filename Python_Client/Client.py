# Program to create a websocket client
import asyncio
import websockets


async def wsClient():
    HOST = "ws://localhost:"
    PORT = "3000"
    PATH = "/aao/gappe/maare"

    async with websockets.connect(HOST + PORT + PATH) as websocket:
        print("Connected!")
        await websocket.send("Hello from Python Client")
        response = await websocket.recv()
        print(f"received: {response}")


if __name__ == "__main__":
    asyncio.run(wsClient())