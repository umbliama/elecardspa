const Tree = ({data}) => {
    const url ="http://contest.elecard.ru/frontend_data/";
    const uniqueCategories = data.map(item => item.category) 
    const mainCategories = uniqueCategories.filter((item,index) => uniqueCategories.indexOf(item) === index)
    return (
        <ul>
            Root
            <ul>
                {console.log(mainCategories)}
                {mainCategories.map((mainCategory,index) => {
                    return (
                        <div>
                            <li>{mainCategory}</li>
                            <ul>
                            {data.map((item,index) => {
                                {if (item.category === mainCategory) return <li><img style={{width:"50px"}} src={`${url}${item.image}`} /></li>}
                            })}  
                        </ul>
                        </div>
                    )
                })}
                
            </ul>
        </ul>
    )
}

export default Tree;
