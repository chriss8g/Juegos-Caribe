import "./presentation.css"
import "../../app/globals.css"
import Image from 'next/image'
export default function Main()
{
    return(
        <div className="Main">
            <div className="MobileView">
                <div className="gameIsOn">
                    <div className="leftInfo">
                        <div className="smallBall">
                            <Image alt="" src="/smallBall.svg" fill className="image"/>
                        </div>
                    </div>
                    <div className="Introduction">
                        <p className="font-medium text-xl">SIGUE LOS</p>
                        <p className="font-bold text-3xl">JUEGOS CARIBE</p>
                        {/* <p className="text-sm font-medium pt-[3%]">Del 3 de Octubre al 7 de Noviembre de 2023 estaremos disfrutando de este gran evento.</p> */}
                    </div>
                </div>
                <div className="playerImage">
                    <div className="backGroundBall">
                        <Image alt="ball" src="/backgroundBall.svg" fill className="image"/>
                    </div>
                    <div className="lg:w-5 recortedPlayer">
                        <Image alt="" src="/player.svg" fill className="image"/>
                    </div>
                </div>
            </div>

            <div className="TabletView">
                
            </div>

            <div className="DesktopView">

                <div className="main-pres-container bg-gray-200 flex justify-between pb-[4.5rem] py-3">
                    <div className="width-10 height-10 mt-6">
                        <Image alt="" src="/smallBall.svg" fill className="image"/>
                    </div>
                    <div className="main-pres-text w-1/2 mt-6">
                        {/* <p className="lg:text-3xl lg:font-semibold mb-3">SIGUE LOS</p>
                        <h1 className="lg:text-6xl lg:font-black mb-3">JUEGOS CARIBE</h1> */}
                        {/* <p className="lg:font-medium lg:w-4/5">Del 3 de octubre al 7 de noviembre del 2023 estaremos
                            disfrutando de este gran evento.</p> */}
                        <div className="main-pres-but">
                            <button
                                className="lg:px-8 lg:py-2 lg:bg-red-950 lg:text-white lg:font-semibold lg:rounded-xl lg:mt-10">Ver
                                más
                            </button>
                        </div>
                    </div>
                    <div className="main-pres-image w-2/5">
                        <Image alt="" src="/backgroundBall.svg" fill className="image"/>
                        <div className="lg:w-5 recortedPlayer">
                            <Image alt="" src="/player.svg" fill className="image"/>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}