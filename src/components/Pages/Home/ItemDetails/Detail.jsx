export const Detail = ()=>{

    const sizes =['S','M', 'L']
    return(

        <div className="container text-center">
            {sizes.map(size => 
            <button
                key={size}
                className='col-2 mx-2 px-2 btn btn-secondary'
            > 
            {size} 
            </button>)}
        </div>
    )
}