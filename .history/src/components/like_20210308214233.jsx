const Like = (props) => {
    const clsIcon = props.movie.liked ? "fa fa-heart" :"fa fa-heart-o";
    return ( 
        <i className={clsIcon} style={{color:'red'}} onClick={props.OnLike}></i>
     );
}

export default Like;