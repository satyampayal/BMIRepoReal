import React, { useEffect, useState } from 'react'
//background: linear-gradient(180deg, rgba(53,78,88,1) 0%, rgba(245,153,66,1) 100%);
function Home() {
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [bmi,setBmi]=useState('0.0');
    const [suggestion,setSuggestion]=useState('Your BMI suggests you-re an underweight. Your ideal weight for your height is between 41.6kg - 56.0kg')

    useEffect(()=>{
        if(height==='' || weight===''){
            setBmi('0.0');
        }
        else{
          //  const m=height;
            const result=(weight/(height*height)*10000);
            const finalResult=result.toFixed(1)
            setBmi(finalResult);
            if(finalResult<18.5 ){
                const a=(19/10000)*(height*height);
               const  suggestionWeight=a.toFixed(2);
                const b=suggestionWeight-weight;
                const icreaseWeight=b.toFixed(2)

                setSuggestion(`You're underWeight at this height ${height}cm and weight${weight} kg 
                    you try to increase weight at least +${icreaseWeight} and recommended weight are ${suggestionWeight}
                `)
            }
            else if( finalResult>24.5){
                const a=(24/10000)*(height*height);
                const suggestionWeight=a.toFixed(2);
                const b=weight-suggestionWeight;
                const reduceWeight=b.toFixed(2);

                setSuggestion(`You're overWeight at this height ${height}cm and weight${weight}kg 
                    you try to reduce weight at least - ${reduceWeight} and recommended weight are ${suggestionWeight}
                `)

            }
            else{
                setSuggestion('Your Body Health is good.')
            }

        }

    },[height,weight])
    return (
        <div className='bg_home w-[100%] h-[100vh]'>
            <div className='max-w-[1170px] mx-auto pt-[23vh] '>
                {/* <div className=' text-[34px] text-yellow-500 '><h1>S.P</h1></div> */}
                <img src="https://jo-cloud85.github.io/body-mass-index-calculator/code/assets/images/logo.svg" className='bg-white w-[40px] rounded-[51%]  text-black' alt="bmi logo img" />
                <div className='grid lg:grid-cols-2 tracking-[2px] mt-[10vh] sm:grid-cols-1'>
                    <div >
                        <h1 className='text-white text-[64px] leading-[66px]'>Body Mass <br /> Index Calculator</h1>
                        <p className='mt-[20px] text-gray-200'>Better understand your weight in relation to your height using our body mass index (BM) calculator.
                            While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to
                            evaluate your overall health and well-being.</p>
                    </div>
                    <div>
                        <div className='w-[90%]  py-3 mx-auto rounded-[30px] bg-black h-[100%] text-white'>
                            <div className='w-[90%] h-[60px] mx-auto bg-gray-500 rounded-l-[50px] rounded-r-[50px] flex justify-between items-center'>
                                <div className="  bg-orange-400 rounded-[50%]   ml-3 w-[50px] h-[50px]">
                                    <i className="fa-solid fa-arrow-down text-[30px] ml-3 mt-2"></i>
                                </div>
                                <p className=' pr-[20%] text-[20px]'>Enter your Details below</p>
                            </div>

                                {/* Now take input from user */}
                                <form className='flex s mt-5 text-gray-400 px-[2%]'>
                                    <div className=''>
                                    <input type="number" name="height" id="height" placeholder='Height '
                                         className='px-[20px] py-[30px] bg-transparent border-[1px] 
                                         rounded-[10px] border-white'
                                         value={height}
                                         onChange={(e)=>{
                                            setHeight(e.target.value)
                                         }}
                                    /> <label htmlFor="cm" className='text-[10px]'>CM</label>
                                    </div>
                                    <div className='ml-[10px]'>
                                    <input type="number" name="kg" id="kg" placeholder='Weight '
                                        className='px-[20px]  py-[30px] bg-transparent border-[1px] 
                                        rounded-[10px] border-white'
                                        value={weight}
                                         onChange={(e)=>{
                                            setWeight(e.target.value)
                                         }}

                                    /> <label htmlFor="cm" className='text-[10px]'>KG</label>
                                    </div>
                                </form>
                                <div className=' mt-3 w-[90%] mx-auto grid  grid-cols-2  bg-orange-400 rounded-r-[50px] h-[110px] text-black'>
                                     <div className='  font-bold ml-3 mt-4'>
                                        <h1 className=''>Your Bmi is.... </h1>
                                        <p className='text-[54px]'>{bmi}</p>
                                     </div>
                                     <div>
                                     <p className=' tracking-[1px] mr-[20px] text-[13px] '>{suggestion}
                                        </p>
                                     </div>

                                </div>




                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home