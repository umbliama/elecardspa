
const Tree = ({data}) => {
    const uniqueCategories = data.map(item => item.category) 
    const mainCategories = uniqueCategories.filter((item,index) => uniqueCategories.indexOf(item) === index)
    return (
        <ul>
            Root
            <ul>
                {console.log(mainCategories)}
                {mainCategories.map((item,index) => {
                    return <li>{item}</li>
                })}
            </ul>
        </ul>
    )
}

export default Tree;
