import "./Tree.scss";
const Tree = ({data}) => {
    const url ="http://contest.elecard.ru/frontend_data/";
    const uniqueCategories = data.map(item => item.category) 
    const mainCategories = uniqueCategories.filter((item,index) => uniqueCategories.indexOf(item) === index)

    return (
        <ul className="tree-main__list"> 
            <li className="tree-main__item"><span  class="tree-main__caret">Root</span></li>
            <ul className="tree-main__list--nested" >
                {console.log(mainCategories)}
                {mainCategories.map((mainCategory,index) => {
                    return (
                        <div>
                            <li key={index}><span className="tree-main__caret">{mainCategory}</span></li>
                            <ul className="tree-main__list--nested">
                            {data.map((item,index) => {
                                {if (item.category === mainCategory) return <li key={index}><img alt="" style={{width:"50px"}} src={`${url}${item.image}`} /></li>}

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
