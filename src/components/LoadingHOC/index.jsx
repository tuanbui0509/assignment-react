import React, { Suspense } from 'react';

const Loading = (LazyComponent) => {
    return (props) => (
        <Suspense fallback="Data is loading ...">
            <LazyComponent {...props} />
        </Suspense>
    )
}

export default Loading