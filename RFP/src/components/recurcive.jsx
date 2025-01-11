const isObj = (data) => typeof data === 'object' && data !== null

const RecursiveComponent = ({data}) => {
    if(!isObj(data)) {
        return <li>{data}</li>
    }   

    const pairs = Object.entries(data)

    return (
        <>
            {pairs.map(([key,value], i) => {
               return (
                    <li key={i}>
                        {key}:
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                )
            })}
        </>
    )
}   

export default RecursiveComponent