import { useTheme } from '../../../../context/ThemeProvider/ThemeProvider';
import './Skills.css';

const Skills = () => {
    const { isDark } = useTheme();
    return (
        <div className='py-5'>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>HTML & CSS</span>
                <div className="skill-bar">
                    <span className="skill-per htmlCss">
                        <span className="tooltip">85%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>React js</span>
                <div className="skill-bar">
                    <span className="skill-per reactJs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>Next js</span>
                <div className="skill-bar">
                    <span className="skill-per nextJs">
                        <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per JavaScript">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>Node js</span>
                <div className="skill-bar">
                    <span className="skill-per nodeJs">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>MongoDb</span>
                <div className="skill-bar">
                    <span className="skill-per mongoDb">
                        <span className="tooltip">65%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>GitHub</span>
                <div className="skill-bar">
                    <span className="skill-per gitHub">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>

        </div>

    );
};

export default Skills;