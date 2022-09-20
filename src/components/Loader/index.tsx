import './index.css';
type LoaderColor = string;
type Props = {
    color?: LoaderColor;
    loading?: boolean;
}

const Loader = (props: Props) => {
    const { 
        color = "#fff",
         loading 
        } = props;
    if (!loading) {
        return null;
    }
    const loaderStyle = {
        borderColor: `${color} transparent transparent transparent`,
    }
    return (
        <>
            <div className='model3d_loading'>
                <div style={loaderStyle}></div>
                <div style={loaderStyle}></div>
                <div style={loaderStyle}></div>
                <div style={loaderStyle}></div>
            </div>
        </>
    )
}
export default Loader;