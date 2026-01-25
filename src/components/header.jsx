"use client"
const Header = (props)=>{

    return(
        <div className="bg-green-400 flex justify-between px-3 py-8 text-Bold  font-bold rounded">
           <h1 className="font-bold text-4xl">
                Tenn_Store
           </h1>
           <nav className="flex gap-4">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Card</a>
           </nav>
        </div>
    )
}


export default Header




