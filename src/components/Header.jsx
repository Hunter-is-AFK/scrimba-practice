import face from "../assets/images/trollface.png"

export default function Header() {
    return (
        <header className="font-poppins bg-gradient-to-r from-purple-900 to-purple-500 px-24 py-8 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    src={face}
                    alt="Troll-face"
                    width="100px"
                    className="mr-4"
                />
                <h2 className="text-white text-3xl font-bold">Meme Generator</h2>
            </div>
            <h4 className="text-white text-xl font-semibold">React Course - Project 3</h4>
        </header>
    )
}
