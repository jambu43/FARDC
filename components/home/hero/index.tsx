import React from 'react'

function Hero() {
    return (
        <section className='lg:min-h-[500px] container section'>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <h1 className='text-4xl font-extrabold'>
                        Unleash your creativity and launch your projects with crowdfunding
                    </h1>
                </div>
                <div className="w-1/2"></div>


            </div>
        </section>
    )
}

export default Hero