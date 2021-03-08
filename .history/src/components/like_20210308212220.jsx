const Like = (props) => {
    const clsIcon = props.liked ? "fa fa-heart" :"fa-heart-o"
    return ( 
        <i className="fa fa-heart" style={{color:'red'}}></i>
     );
}
 
export default Like;