'use client';

const FilterError = ({error}) => {
    return (
        <div id="filterError">
            <h2>An error occurred!</h2>
            <p>{error.message}</p>
        </div>
    );
};

export default FilterError;

// ? Because we thrown an error, an error object is passed. We can display the specific error. The text is what we thrown.