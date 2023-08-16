import ReactPlayer from 'react-player'

const VideoPlayer = () => {
    return (
        <div >
            <dialog id="my_modal_3" className="">
                <form method="dialog" className="">
                    <button className="btn btn-sm btn-circle btn-ghost outline-none absolute right-2 top-2 z-50">✕</button>
                    <ReactPlayer url='https://youtu.be/bON-KPiiNCk' />
                </form>

            </dialog>
        </div>
    );
};

export default VideoPlayer;