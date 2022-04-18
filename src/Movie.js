import React from "react";
import PropTypes from "prop-types";

function Movie(){
    return <h1></h1>
}

//title,summary,medium_cover_image
Movie.propTypes={
    id:PropTypes.number.isRequired, 
    year:PropTypes.number.isRequired, 
    title:PropTypes.string.isRequired, 
    summary:PropTypes.string.isRequired, 
    medium_cover_image:PropTypes.string.isRequired, 
};

export default Movie;