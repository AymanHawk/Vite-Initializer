import { useEffect } from "react";

const serverUrl = 'https://localhost:1234';

function ChatRoom({roomId}){
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => { //clean up function used to specify when to stop synchronizing
            connection.disconnect();
        };
    }, [roomId]);
}