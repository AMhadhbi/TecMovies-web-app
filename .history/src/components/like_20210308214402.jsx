const Like = (props) => {
    const {movie, onLike} = props;
    const clsIcon = movie.liked ? "fa fa-heart" :"fa fa-heart-o";
    return ( 
        <i className={clsIcon} style={{color:'red'}} onClick={OnLike( )}></i>
     );
}

export default Like;