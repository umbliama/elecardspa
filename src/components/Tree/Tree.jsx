import "./Tree.scss";
import TreeComp from 'react-animated-tree'
import {urlToFetch} from '../../utils/index'


const Tree = ({data}) => {
    const uniqueCategories = data.map(item => item.category) 
    const mainCategories = uniqueCategories.filter((item,index) => uniqueCategories.indexOf(item) === index)
    const toggle = (e)  => {
        e.target.classList.toggle("active");
    }
    console.log(mainCategories)
    return (
        <div className="tree-main">
            <TreeComp  content="root">
                {mainCategories.map((mainCategory,index) => {
                        return (
                            <TreeComp key={index} content={mainCategory}>
                            {data.filter(item => item.category === mainCategory).map((item,index) => {
                                return <TreeComp key={index} content={item.image} >
                                    <img key={index} alt={item.image} onClick={(e) => toggle(e)} className={`tree-main__img--thumb`} src={`${urlToFetch}${item.image}`} />

                                </TreeComp>


                            })}  
                            </TreeComp>
                        )
                })}
            </TreeComp>

        </div>
    )
}

export default Tree;
