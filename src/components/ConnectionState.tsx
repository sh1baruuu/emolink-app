
const ConnectionState: React.FC<{isConnected: boolean}> = ({isConnected}) => {
    return <p>State: { ' ' + isConnected}</p>
}

export default ConnectionState