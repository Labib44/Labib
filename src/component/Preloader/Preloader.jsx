import logo from '../../assets/navbar/logo-dark.png';

const Preloader = () => {
    return (
        <div
            role="status"
            className="flex items-center flex-col justify-center min-h-screen p-5 bg-[#FAFAFA]"
        >
            <img src={logo} alt="loader" className="w-50 h-56" />
            <div className="w-16 h-16 border-4 border-dashed border-[#2FB4AE] rounded-full animate-spin"></div>
           
        </div>
    );
};

export default Preloader;