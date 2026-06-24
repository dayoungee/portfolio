import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import PortfolioContext from "../../context/context";


const Slider = ( props ) => {
    const { projectImage } = useContext(PortfolioContext)
    const [path, setPath] = useState([]);
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    const  {id} = props;
    useEffect(()=>{
        if(projectImage[id-1] === undefined){
            setPath([]);
        }else{
            setPath(projectImage[id-1].path);
        }
    },[id, projectImage]);

    return(
      <Carousel className="carousel" autoPlay={false} animation="fade">
        {
                path.map( (item) => <Item key={item} item={item} /> )
        }
      </Carousel>
    )
}
function Item(props)
{
    return (
      <div className="img-wrapper">
        {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types,jsx-a11y/alt-text */}
        <img className="project-image" src={props.item} />
      </div>
    )
}
export default Slider;
