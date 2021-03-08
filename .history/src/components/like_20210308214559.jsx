const Like = (props) => {
    const {movie, OnLike} = props;
    const clsIcon = movie.liked ? "fa fa-heart" :"fa fa-heart-o";
    return ( 
        <i className={clsIcon} 
        style={{color:'red'}} 
        onClick={ () => OnLike(movie)}>

        </i>
     );
}

export default Like;