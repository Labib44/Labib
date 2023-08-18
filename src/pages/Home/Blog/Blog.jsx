import { Icon } from '@iconify/react';
// <Icon icon="mdi:lan" />
{/* <Icon icon="mdi:responsive" /> */ }
{/* <Icon icon="mdi:vector-combine" /> */ }
import img1 from "../../../assets/blog/img-1.png"
import img2 from "../../../assets/blog/img-2.png"
import img3 from "../../../assets/blog/img-3.png"
import BlogCard from "./BlogCard";
import { useTheme } from '../../../context/ThemeProvider/ThemeProvider';

const Blog = () => {
    const { isDark} = useTheme();
    const blogDatas = [
        {
            id: 1,
            icon: <Icon icon="mdi:lan" />,
            img: img1,
            bgcolor: 'bg-[#2558AB]',
            title: "We makes UI/UX design very easy for you.",
            description: "He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny.",

        },
        {
            id: 2,
            icon: <Icon icon="mdi:responsive" />,
            img: img2,
            bgcolor: 'bg-[#FF7F51]',
            title: "Current world design trends know easily.",
            description: "He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny.",

        },
        {
            id: 3,
            icon: <Icon icon="mdi:vector-combine" />,
            img: img3,
            bgcolor: 'bg-[#2FB4AE]',
            title: "We calculate clients demand for research.",
            description: "He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny.",

        },
    ]
    return (
        <div id='blog' className={`" pb-20 " ${!isDark ? "bg-[#303841]" : "bg-white "}`}>
            <div className="container mx-auto p-5 px-24 lg:px-0 md:px-0 sm:px-0">
                <p className="p-2 font-bold text-sm text-accent text-center">Blog</p>
                <h1 className={`" text-4xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold text-center " ${!isDark ? "text-white" : " text-primary"}`}>Our Regular News</h1>
                <p className="text-center py-2 px-5 text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>


                <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 mt-10 p-5">
                    {
                        blogDatas.map((blogData) => <BlogCard
                            key={blogData.id}
                            blogData={blogData}
                        ></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;