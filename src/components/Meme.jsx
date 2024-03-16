import memesData from "../assets/info/memesData"

export default function Meme() {
    return (
        <main>
            <form action="post" className="grid grid-cols-2 grid-rows-2 gap-5 w-3/5 m-auto pt-12">
                <label className="text-xl">Top text
                    <input
                        type="text"
                        name="top-text"
                        id="top-text"
                        placeholder="Top text"
                        className="outline outline-1 outline-slate-400 rounded-md h-10 text-lg pl-4 lg:block lg:w-full"
                    />
                </label>
                <label className="text-xl">Bottom text
                    <input
                        type="text"
                        name="bottom-text"
                        id="bottom-text"
                        placeholder="Bottom text"
                        className="outline outline-1 outline-slate-400 rounded-md h-10 text-lg pl-4 lg:block lg:w-full"
                    />
                </label>
                <button
                    className="outline outline-1 outline-purple-900 rounded-md col-start-1 col-end-3 h-12 bg-gradient-to-r from-purple-900 to-purple-500 text-white text-xl"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main >
    )
}