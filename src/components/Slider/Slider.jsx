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
    },[projectImage]);

    return(
      <Carousel autoPlay animation="slide">
        {
            path.map( (item) => <Item item={item} /> )
        }
      </Carousel>
    )
}
function Item(props)
{
    return (
        // eslint-disable-next-line jsx-a11y/alt-text,react/destructuring-assignment,react/prop-types
      <img src={props.item} />
    )
}
export default Slider;