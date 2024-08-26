'use client';

import { Blocks } from "react-loader-spinner";

export default function NewsLoading() {
    // return <p>Loading...</p>;
    return (
        <>
            <Blocks
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
            />
            <p>Loading...</p>
        </>
    )
}