import '../App.css'

function Title ({num, title}) {

    return (
        <div className='flex items-center gap-5 max-md:justify-center mt-12 md:ml-16 lg:ml-40'>
            <h1 className='barlow-title font-bold text-[#484951]'>{num}</h1><h1 className='barlow-title text-white'>{title}</h1>
        </div>
    )
}

export default Title