const Like = (props) => {
    const clsIcon = props.liked ? "fa fa-heart" :"fa-heart-o";
    return ( 
        <i className={clsIcon} style={{color:'red'}}></i>
     );
}
 
export default Like;