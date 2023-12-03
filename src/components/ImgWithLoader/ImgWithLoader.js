import { useState } from "react";


function ImgWithLoader({ src = '', alt = '', imgClassName, width = '100%', notLoadedRender = (<p>Vui lòng đợi trong giây lát!</p>) }) {
    const [loaded, setLoaded] = useState(false)

    const handleLoading = () => {
        setLoaded(true)
    }

    return (
        <>
            <img loading="eager" width={width} onLoad={handleLoading} className={imgClassName} src={src} alt={alt} />
            {!loaded && notLoadedRender}
        </>
    );
}

export default ImgWithLoader;