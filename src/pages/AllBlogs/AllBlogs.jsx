import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import img from "../../assets/AllBlogs/demo.jpg"
import AllBlogsCard from "./AllBlogsCard";

const AllBlogs = () => {
    const { isDark } = useTheme();

    const blogDatas = [
        {
            id: 1,
            img: img,
            title: "Lorem ipsum",
            author:"Tom Cruise",
            textPrimary: "text-[#fb8500]",
            textSecondary:"text-[#fb8500]",
            details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        },
        {
            id: 2,
            img: img,
            title: "Lorem ipsum",
            author:"Neymar Jr",
            textPrimary: "text-[#fb8500]",
            textSecondary:"text-[#fb8500]",
            details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        },
        {
            id: 3,
            img: img,
            title: "Lorem ipsum",
            author:"Vinicius Junior",
            textPrimary: "text-[#fb8500]",
            textSecondary:"text-[#fb8500]",
            details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        },
        {
            id: 4,
            img: img,
            title: "Lorem ipsum",
            author:"Vin Diesel",
            textPrimary: "text-[#fb8500]",
            textSecondary:"text-[#fb8500]",
            details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        },
    ]

    return (
        <div className={` ${!isDark ? "bg-[#343F4B] p-5" : "bg-[#F4F6FB] p-5"}`}>
            <div className=" container mx-auto pt-20 px-24 lg:px-0 md:px-0 sm:px-0">
                <h1 className={`" text-4xl font-bold underline underline-offset-8 hover:text-secondary duration-700 px-5 py-10 " ${!isDark ? " text-white" : "text-primary"}`}>All Blogs</h1>
                <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-36">
                    {
                        blogDatas.map((blogData) => <AllBlogsCard
                            key={blogData.id}
                            blogData={blogData}
                        ></AllBlogsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;