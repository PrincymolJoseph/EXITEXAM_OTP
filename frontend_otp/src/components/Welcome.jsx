import React from 'react'

const Welcome = () => {
  return (
    <div>
        <h1 class="mx-5 darkblue"> <u> OTP APP  </u></h1>
        <div class="searchBand">
            <form class="row row-cols-lg-auto g-3 justify-content-center formStyle">
                <div class="col">
                    
                    {/* <label for="inlineFormSelectPref"><h3 style={{color:'blue'}}>Welcome to the Application!!!</h3></label> */}
                    <label for="inlineFormSelectPref"><h3 class="mx-5 darkblue">Welcome to the Application!!!</h3></label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Welcome